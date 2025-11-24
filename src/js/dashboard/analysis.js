// Analysis Engine
const Analysis = {
    data: [],
    questions: [],
    students: [],
    results: [],

    // Configuration
    themes: {
        'Ansiedad': ['ansiedad', 'nervios', 'preocupación', 'inquietud', 'tensión', 'panico', 'miedo', 'temor'],
        'Trauma': ['trauma', 'abuso', 'violencia', 'agresión', 'víctima', 'evento', 'dolor', 'sufrimiento', 'duelo', 'pérdida'],
        'Depresión': ['tristeza', 'depresión', 'llanto', 'desánimo', 'baja autoestima', 'aislamiento', 'soledad', 'culpa'],
        'Familia': ['mamá', 'papá', 'madre', 'padre', 'familia', 'hermano', 'tío', 'abuela', 'casa', 'hogar'],
        'Académico': ['escuela', 'clase', 'nota', 'examen', 'estudio', 'universidad', 'carrera', 'profesor', 'docente'],
        'Social': ['amigos', 'pareja', 'relación', 'social', 'compañeros', 'grupo', 'interacción'],
        // New Clinical Themes
        'Rapport': ['rapport', 'confianza', 'vínculo', 'empatía', 'conexión', 'relación terapéutica', 'apertura'],
        'Diagnóstico': ['diagnóstico', 'evaluación', 'prueba', 'test', 'resultado', 'hipótesis', 'clínico'],
        'Ética': ['ética', 'confidencialidad', 'consentimiento', 'límite', 'responsabilidad', 'profesionalismo'],
        'Intervención': ['intervención', 'técnica', 'estrategia', 'tratamiento', 'abordaje', 'plan']
    },

    init: function (csvData) {
        return new Promise((resolve) => {
            // Reset state
            this.data = [];
            this.questions = [];
            this.students = [];
            this.results = [];

            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    this.raw = results.data;
                    this.process();
                    resolve();
                }
            });
        });
    },

    process: function () {
        if (!this.raw || this.raw.length === 0) return;

        // Extract Students (S1fe, S2fe, S1fc, S1fd...)
        const studentColRegex = /^S\d+[a-z]+$/i;
        const firstRow = this.raw[0];
        this.students = Object.keys(firstRow).filter(key => studentColRegex.test(key));

        console.log(`Found students: ${this.students.join(', ')}`);

        // Process Rows
        this.raw.forEach(row => {
            const qCode = row['Codigo de Pregunta'] || row['ï»¿Codigo de Pregunta'];
            const qText = row['Pregunta'] || row['Preguntas'];

            if (!qCode) return;

            this.questions.push({ code: qCode, text: qText });

            this.students.forEach(studentId => {
                const responseText = row[studentId] || "";
                if (responseText.trim()) {
                    const sentiment = this.analyzeSentiment(responseText);
                    const themes = this.detectThemes(responseText);

                    this.results.push({
                        questionCode: qCode,
                        questionText: qText, // Store text for context
                        studentId: studentId,
                        text: responseText,
                        sentiment: sentiment,
                        themes: themes,
                        wordCount: responseText.split(/\s+/).length
                    });
                }
            });
        });
    },

    analyzeSentiment: function (text) {
        const positive = ['bien', 'bueno', 'excelente', 'mejor', 'ayuda', 'confianza', 'logro', 'positivo', 'seguro', 'tranquilo', 'eficaz', 'útil', 'claro', 'apoyo', 'gracias', 'avance', 'comprensión', 'adecuado', 'respeto', 'calma', 'solución', 'fácil', 'éxito', 'amor', 'alegría', 'feliz', 'satisfacción'];
        const negative = ['mal', 'difícil', 'problema', 'ansiedad', 'miedo', 'culpa', 'riesgo', 'falta', 'error', 'limitación', 'negativo', 'triste', 'abuso', 'trauma', 'conflicto', 'tensión', 'fatiga', 'cansado', 'inseguro', 'confusión', 'contradicción', 'desafío', 'agobio', 'estrés', 'duelo', 'pérdida', 'dolor', 'vergüenza', 'incomodidad', 'baja', 'poca', 'nunca', 'jamás', 'imposible', 'peor', 'fracaso'];

        const lowerText = text.toLowerCase();
        let score = 0;

        positive.forEach(w => { if (lowerText.includes(w)) score++; });
        negative.forEach(w => { if (lowerText.includes(w)) score--; });

        if (score > 0) return 'pos';
        if (score < 0) return 'neg';
        return 'neu';
    },

    detectThemes: function (text) {
        const lowerText = text.toLowerCase();
        const detected = [];

        for (const [theme, keywords] of Object.entries(this.themes)) {
            if (keywords.some(k => lowerText.includes(k))) {
                detected.push(theme);
            }
        }
        return detected;
    },

    // Advanced Metrics
    getGlobalStats: function () {
        const totalResponses = this.results.length;
        const totalWords = this.results.reduce((acc, r) => acc + r.wordCount, 0);
        const positiveCount = this.results.filter(r => r.sentiment === 'pos').length;
        const neutralCount = this.results.filter(r => r.sentiment === 'neu').length;
        const negativeCount = this.results.filter(r => r.sentiment === 'neg').length;

        // Critical count based on specific themes
        const criticalThemesList = ['Ansiedad', 'Trauma', 'Depresión', 'Conflicto', 'Riesgo']; // Define what is "critical"
        const criticalCount = this.results.filter(r => r.themes.some(t => criticalThemesList.includes(t))).length;

        return {
            participants: this.students.length,
            positivityIndex: totalResponses ? Math.round((positiveCount / totalResponses) * 100) : 0,
            totalWords: totalWords,
            criticalThemes: criticalCount,
            sentimentCounts: { pos: positiveCount, neu: neutralCount, neg: negativeCount },
            sentimentPercents: {
                pos: totalResponses ? ((positiveCount / totalResponses) * 100).toFixed(1) : 0,
                neu: totalResponses ? ((neutralCount / totalResponses) * 100).toFixed(1) : 0,
                neg: totalResponses ? ((negativeCount / totalResponses) * 100).toFixed(1) : 0
            }
        };
    },

    // New: Get detailed relationships for critical view
    getCriticalRelationships: function () {
        const criticalThemesList = ['Ansiedad', 'Trauma', 'Depresión', 'Rapport', 'Diagnóstico', 'Ética']; // Expanded interest list
        const relationships = [];

        this.results.forEach(r => {
            const foundThemes = r.themes.filter(t => criticalThemesList.includes(t));
            if (foundThemes.length > 0) {
                foundThemes.forEach(theme => {
                    // Extract a snippet or context (simple approach: the whole text for now, or first sentence)
                    const snippet = r.text.length > 100 ? r.text.substring(0, 100) + '...' : r.text;

                    relationships.push({
                        theme: theme,
                        studentId: r.studentId,
                        questionCode: r.questionCode,
                        questionText: r.questionText,
                        context: snippet,
                        fullText: r.text
                    });
                });
            }
        });
        return relationships;
    },



    getThemeDistribution: function () {
        const distribution = {};
        Object.keys(this.themes).forEach(t => distribution[t] = 0);

        this.results.forEach(r => {
            r.themes.forEach(t => {
                if (distribution[t] !== undefined) distribution[t]++;
            });
        });
        return distribution;
    },

    // New: Get context for themes (what words appear near themes)
    getThemeDetails: function () {
        const details = {};
        Object.keys(this.themes).forEach(t => {
            details[t] = { count: 0, associatedWords: {} };
        });

        this.results.forEach(r => {
            r.themes.forEach(theme => {
                if (details[theme]) {
                    details[theme].count++;
                    // Simple co-occurrence: add all words from this response
                    const words = r.text.toLowerCase().split(/\s+/);
                    const stopWords = this.getStopWords();
                    words.forEach(w => {
                        const clean = w.replace(/[.,;()""''\n\r]/g, '');
                        if (clean.length > 3 && !stopWords.includes(clean) && !this.themes[theme].includes(clean)) {
                            details[theme].associatedWords[clean] = (details[theme].associatedWords[clean] || 0) + 1;
                        }
                    });
                }
            });
        });

        // Sort associated words
        Object.keys(details).forEach(t => {
            details[t].topWords = Object.entries(details[t].associatedWords)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(e => e[0]);
        });

        return details;
    },

    getSentimentTrend: function () {
        return this.questions.map(q => {
            const responses = this.results.filter(r => r.questionCode === q.code);
            const total = responses.length;
            const pos = responses.filter(r => r.sentiment === 'pos').length;
            const neg = responses.filter(r => r.sentiment === 'neg').length;
            const neu = responses.filter(r => r.sentiment === 'neu').length;
            return {
                code: q.code,
                text: q.text,
                pos, neg, neu,
                posPct: total ? (pos / total) * 100 : 0,
                negPct: total ? (neg / total) * 100 : 0
            };
        });
    },

    getWordCloudData: function (limit = 50) {
        const text = this.results.map(r => r.text).join(' ').toLowerCase();
        const words = text.split(/\s+/);
        const stopWords = this.getStopWords();

        const counts = {};
        words.forEach(w => {
            const clean = w.replace(/[.,;()""''\n\r]/g, '');
            if (clean.length > 3 && !stopWords.includes(clean)) {
                counts[clean] = (counts[clean] || 0) + 1;
            }
        });

        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([text, value]) => ({ text, value }));
    },

    // New: Group data by question for "Triangulation" view
    getQuestionInsights: function () {
        return this.questions.map(q => {
            const responses = this.results.filter(r => r.questionCode === q.code);
            if (responses.length === 0) return null;

            const sentimentCounts = { pos: 0, neu: 0, neg: 0 };
            const themeCounts = {};

            responses.forEach(r => {
                sentimentCounts[r.sentiment]++;
                r.themes.forEach(t => {
                    themeCounts[t] = (themeCounts[t] || 0) + 1;
                });
            });

            // Find dominant theme
            const topTheme = Object.entries(themeCounts).sort((a, b) => b[1] - a[1])[0];

            return {
                code: q.code,
                text: q.text,
                responseCount: responses.length,
                sentiments: sentimentCounts,
                topTheme: topTheme ? topTheme[0] : 'Ninguno',
                responses: responses // Include raw responses for display
            };
        }).filter(q => q !== null);
    },

    getStopWords: function () {
        return ['de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'se', 'del', 'las', 'un', 'por', 'con', 'no', 'una', 'su', 'para', 'es', 'al', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'fue', 'este', 'ha', 'sí', 'porque', 'esta', 'son', 'entre', 'cuando', 'muy', 'sin', 'sobre', 'también', 'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos', 'durante', 'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos', 'e', 'esto', 'mí', 'antes', 'algunos', 'qué', 'unos', 'yo', 'otro', 'otras', 'otra', 'él', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos', 'cual', 'poco', 'ella', 'estar', 'estas', 'algunas', 'algo', 'nosotros', 'mi', 'mis', 'tú', 'te', 'ti', 'casi', 'donde', 'dos', 'tan', 'asi', 'hizo', 'hacia', 'vez', 'pudo', 'ser'];
    }
};
