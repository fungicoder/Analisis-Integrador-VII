/**
 * INSIGHTS LOADER - Sistema de acceso a insights consolidados
 * 
 * Este módulo proporciona funciones helper para acceder y procesar
 * el dataset de insights de manera eficiente con sistema de caché.
 */

const InsightsLoader = {
    // Caché de datos
    cache: {
        insights: null,
        lastUpdate: null
    },

    /**
     * Inicializa y carga los insights
     */
    init: function () {
        if (typeof dataInsights !== 'undefined') {
            this.cache.insights = dataInsights;
            this.cache.lastUpdate = new Date();
            console.log('✅ Insights cargados:', dataInsights.metadata);
            return true;
        } else {
            console.error('❌ dataInsights no está definido');
            return false;
        }
    },

    /**
     * Obtiene todos los insights
     */
    getAll: function () {
        if (!this.cache.insights) {
            this.init();
        }
        return this.cache.insights;
    },

    /**
     * Obtiene metadata del análisis
     */
    getMetadata: function () {
        const insights = this.getAll();
        return insights ? insights.metadata : null;
    },

    /**
     * Obtiene insight por área específica
     * @param {string} area - Área del insight (rapport, testSelection, etc.)
     */
    getInsightByArea: function (area) {
        const insights = this.getAll();
        if (!insights || !insights.crossDatasetInsights) return null;
        return insights.crossDatasetInsights[area] || null;
    },

    /**
     * Obtiene vista triangulada de un tema específico
     * @param {string} topic - Tema a triangular
     */
    getTriangulatedView: function (topic) {
        const insights = this.getAll();
        if (!insights) return null;

        // Buscar en crossDatasetInsights
        const result = {
            topic: topic,
            studentsPerspective: null,
            coEvaluatorsPerspective: null,
            professorsPerspective: null,
            triangulation: null
        };

        // Buscar en cada área de insights
        Object.keys(insights.crossDatasetInsights).forEach(area => {
            const areaData = insights.crossDatasetInsights[area];
            if (areaData.studentsPerspective) result.studentsPerspective = areaData.studentsPerspective;
            if (areaData.coEvaluatorsPerspective) result.coEvaluatorsPerspective = areaData.coEvaluatorsPerspective;
            if (areaData.professorsPerspective) result.professorsPerspective = areaData.professorsPerspective;
            if (areaData.triangulation) result.triangulation = areaData.triangulation;
        });

        return result;
    },

    /**
     * Obtiene recomendaciones por rol
     * @param {string} role - 'students', 'professors', 'institution'
     */
    getRecommendationsByRole: function (role) {
        const insights = this.getAll();
        if (!insights || !insights.recommendations) return null;

        const roleMap = {
            'students': 'forStudents',
            'professors': 'forProfessors',
            'institution': 'forInstitution'
        };

        const key = roleMap[role];
        return key ? insights.recommendations[key] : null;
    },

    /**
     * Obtiene citas representativas por categoría
     * @param {string} category - Categoría de citas
     */
    getRepresentativeQuotes: function (category = null) {
        const insights = this.getAll();
        if (!insights || !insights.representativeQuotes) return null;

        if (!category) {
            return insights.representativeQuotes;
        }

        // Buscar citas de la categoría específica
        const result = {
            students: [],
            coEvaluators: [],
            professors: []
        };

        if (insights.representativeQuotes.students) {
            result.students = insights.representativeQuotes.students.filter(q =>
                q.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (insights.representativeQuotes.coEvaluators) {
            result.coEvaluators = insights.representativeQuotes.coEvaluators.filter(q =>
                q.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (insights.representativeQuotes.professors) {
            result.professors = insights.representativeQuotes.professors.filter(q =>
                q.category.toLowerCase() === category.toLowerCase()
            );
        }

        return result;
    },

    /**
     * Obtiene métricas clave
     */
    getCriticalMetrics: function () {
        const insights = this.getAll();
        return insights ? insights.keyMetrics : null;
    },

    /**
     * Obtiene temas clínicos
     */
    getClinicalThemes: function () {
        const insights = this.getAll();
        return insights && insights.thematicAnalysis ? insights.thematicAnalysis.clinicalThemes : null;
    },

    /**
     * Obtiene patrones recurrentes
     */
    getPatterns: function () {
        const insights = this.getAll();
        return insights && insights.thematicAnalysis ? insights.thematicAnalysis.patterns : null;
    },

    /**
     * Obtiene hallazgos críticos
     */
    getCriticalFindings: function () {
        const insights = this.getAll();
        return insights ? insights.criticalFindings : null;
    },

    /**
     * Obtiene fortalezas identificadas
     */
    getStrengths: function () {
        const findings = this.getCriticalFindings();
        return findings ? findings.strengths : null;
    },

    /**
     * Obtiene debilidades identificadas
     */
    getWeaknesses: function () {
        const findings = this.getCriticalFindings();
        return findings ? findings.weaknesses : null;
    },

    /**
     * Obtiene factores externos
     */
    getExternalFactors: function () {
        const findings = this.getCriticalFindings();
        return findings ? findings.externalFactors : null;
    },

    /**
     * Obtiene impacto en identidad profesional
     */
    getProfessionalIdentity: function () {
        const findings = this.getCriticalFindings();
        return findings ? findings.professionalIdentity : null;
    },

    /**
     * Busca insights por palabra clave
     * @param {string} keyword - Palabra clave a buscar
     */
    searchByKeyword: function (keyword) {
        const insights = this.getAll();
        if (!insights || !keyword) return [];

        const results = [];
        const searchLower = keyword.toLowerCase();

        // Función helper para buscar en objeto
        const searchInObject = (obj, path = '') => {
            if (!obj) return;

            if (typeof obj === 'string') {
                if (obj.toLowerCase().includes(searchLower)) {
                    results.push({ path, value: obj });
                }
            } else if (Array.isArray(obj)) {
                obj.forEach((item, index) => {
                    searchInObject(item, `${path}[${index}]`);
                });
            } else if (typeof obj === 'object') {
                Object.keys(obj).forEach(key => {
                    searchInObject(obj[key], path ? `${path}.${key}` : key);
                });
            }
        };

        searchInObject(insights);
        return results;
    },

    /**
     * Obtiene estadísticas generales de insights
     */
    getStats: function () {
        const insights = this.getAll();
        if (!insights) return null;

        return {
            totalParticipants: insights.metadata.totalParticipants,
            totalAreas: Object.keys(insights.crossDatasetInsights).length,
            totalThemes: insights.thematicAnalysis.clinicalThemes.length,
            totalPatterns: insights.thematicAnalysis.patterns.length,
            totalStrengths: insights.criticalFindings.strengths.length,
            totalWeaknesses: insights.criticalFindings.weaknesses.length,
            totalRecommendations: {
                students: insights.recommendations.forStudents.length,
                professors: insights.recommendations.forProfessors.length,
                institution: insights.recommendations.forInstitution.length
            }
        };
    },

    /**
     * Exporta insights a JSON para descarga
     */
    exportToJSON: function () {
        const insights = this.getAll();
        if (!insights) return null;

        const dataStr = JSON.stringify(insights, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = `integrador_vii_insights_${insights.metadata.analysisDate}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    },

    /**
     * Guarda insights favoritos en localStorage
     * @param {string} key - Clave del insight
     * @param {object} data - Datos del insight
     */
    saveFavorite: function (key, data) {
        try {
            let favorites = JSON.parse(localStorage.getItem('insightsFavorites') || '{}');
            favorites[key] = {
                data: data,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem('insightsFavorites', JSON.stringify(favorites));
            return true;
        } catch (e) {
            console.error('Error saving favorite:', e);
            return false;
        }
    },

    /**
     * Obtiene insights favoritos guardados
     */
    getFavorites: function () {
        try {
            return JSON.parse(localStorage.getItem('insightsFavorites') || '{}');
        } catch (e) {
            console.error('Error loading favorites:', e);
            return {};
        }
    },

    /**
     * Elimina un favorito
     * @param {string} key - Clave del insight a eliminar
     */
    removeFavorite: function (key) {
        try {
            let favorites = JSON.parse(localStorage.getItem('insightsFavorites') || '{}');
            delete favorites[key];
            localStorage.setItem('insightsFavorites', JSON.stringify(favorites));
            return true;
        } catch (e) {
            console.error('Error removing favorite:', e);
            return false;
        }
    }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        InsightsLoader.init();
    });
} else {
    InsightsLoader.init();
}
