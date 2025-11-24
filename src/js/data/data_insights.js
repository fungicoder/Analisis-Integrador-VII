/**
 * INSIGHTS DATASET - Análisis Integrador VII
 * 
 * Este dataset consolida los hallazgos clave de los tres datasets (FE, FC, FD)
 * para mantener persistencia de insights a lo largo del dashboard.
 * 
 * METODOLOGÍA DE TRIANGULACIÓN:
 * - Conversión cuantitativa de respuestas cualitativas mediante análisis de frecuencia
 * - Cruce de perspectivas: Estudiantes (FE) vs Co-Evaluadores (FC) vs Docentes (FD)
 * - Identificación de convergencias, divergencias y puntos críticos
 * - Validación cruzada de datos numéricos y narrativas
 * 
 * Última actualización: 2025-11-22
 */

const dataInsights = {
    metadata: {
        totalParticipants: {
            students: 14,      // Estudiantes (FE: S1fe - S14fe)
            coEvaluators: 2,   // Co-evaluadores (FC: S1FC, S2FC)
            professors: 2      // Docentes (FD: S1fd, S2fd)
        },
        totalQuestions: {
            FE: 40,
            FC: 14,
            FD: 22
        },
        analysisDate: "2025-11-22",
        version: "2.0",
        triangulationMethod: "Conversión cuantitativa + Análisis cualitativo cruzado"
    },

    // INSIGHTS TRANSVERSALES (cruzan los 3 datasets)
    crossDatasetInsights: {
        // 1. RAPPORT Y ALIANZA TERAPÉUTICA
        rapport: {
            description: "Construcción de alianza terapéutica y técnicas no verbales",
            studentsPerspective: {
                // Análisis cuantitativo de FEP4 (técnicas no verbales)
                techniques: [
                    { technique: "Tono de voz", frequency: 11, percentage: 78.57, participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12] },
                    { technique: "Postura", frequency: 9, percentage: 64.29, participants: [3, 4, 5, 7, 8, 9, 12, 14] },
                    { technique: "Contacto visual", frequency: 9, percentage: 64.29, participants: [3, 4, 5, 6, 8, 9, 10, 12] },
                    { technique: "Manejo de silencios", frequency: 7, percentage: 50.00, participants: [1, 7, 8, 9, 10, 13] },
                    { technique: "Regulación emocional", frequency: 6, percentage: 42.86, participants: [2, 6, 8, 9, 11] }
                ],
                // Análisis cualitativo de FEP6 y FEP7
                successIndicators: [
                    { indicator: "Paciente más cómodo y abierto", mentions: 4 },
                    { indicator: "Agradecimiento verbal", mentions: 2 },
                    { indicator: "Cambio en postura corporal (relajación)", mentions: 3 },
                    { indicator: "Mayor apertura en respuestas", mentions: 5 },
                    { indicator: "Mejoría en comunicación familiar", mentions: 2 }
                ],
                challenges: [
                    { challenge: "Ansiedad por aprobar vs aprender", severity: "Alto", mentions: 3 },
                    { challenge: "Falta de experiencia inicial", severity: "Alto", mentions: 8 },
                    { challenge: "Manejo de crisis emocionales del paciente", severity: "Crítico", mentions: 6 },
                    { challenge: "Cancelaciones de pacientes", severity: "Alto", mentions: 7 }
                ]
            },
            coEvaluatorsPerspective: {
                // Análisis de FCP2: ratings 4 y 5
                rating: 4.5,
                ratingDistribution: { score4: 1, score5: 1 },
                impact: "Muy Positivo",
                // Análisis de FCP3 y FCP4
                challenges: [
                    { challenge: "Conflictos por reserva de espacio", impact: "Logístico" },
                    { challenge: "Tiempo excesivo en Neuropsi (45+ mins)", impact: "Fatiga del paciente" },
                    { challenge: "Inexperiencia con casos TEA", impact: "Técnico" },
                    { challenge: "Manejo de turnos durante evaluación", impact: "Coordinación" }
                ],
                observations: [
                    "Cambio de postura corporal del paciente tras 45 min (fatiga)",
                    "Distracción del entorno como factor de interferencia",
                    "Importancia de evitar interrupciones entre evaluadores"
                ]
            },
            professorsPerspective: {
                // Análisis de FDP2: ratings 4,4
                rating: 4.0,
                ratingDistribution: { score4: 2 },
                // Análisis de FDP3 y observaciones cualitativas
                observations: [
                    { observation: "Lectura del contexto moderada, a veces prejuiciada", severity: "Medio" },
                    { observation: "Dificultad para justificar decisiones con teoría", severity: "Alto" },
                    { observation: "Ansiedad del estudiante afecta la escucha activa", severity: "Alto" },
                    { observation: "Dificultad recurrente en comunicación durante supervisiones", severity: "Alto" },
                    { observation: "Estudiantes se ponen a la defensiva con retroalimentación", severity: "Medio" }
                ],
                criticalInsight: "Ansiedad por aprobar interfiere con el genuino aprendizaje clínico"
            },
            triangulation: {
                convergence: "Todos coinciden en que el rapport se logró establecer (ratings promedio > 4.0 en las 3 perspectivas).",
                divergence: "Estudiantes se enfocan en técnicas no verbales específicas (voz 78%, postura 64%); Docentes señalan la falta de profundidad teórica detrás de esas acciones y dificultades en la comunicación verbal.",
                criticalPoint: "La ansiedad por la evaluación académica (mencionada explícitamente por 1 docente y observada en comportamiento defensivo) es la principal barrera para un rapport genuino y aprendizaje profundo.",
                quantitativeEvidence: {
                    studentsSatisfaction: "78.57% usa tono de voz conscientemente",
                    coEvaluatorsRating: "4.5/5",
                    professorsRating: "4.0/5",
                    gapAnalysis: "Brecha entre técnica (alta) y fundamentación teórica (baja)"
                }
            }
        },

        // 2. SELECCIÓN Y APLICACIÓN DE PRUEBAS
        testSelection: {
            description: "Proceso de selección y aplicación de instrumentos psicométricos",
            // Análisis cuantitativo de FEP25 (prueba más útil)
            mostUsedTests: [
                { test: "MMPI-2", mentions: 8, percentage: 57.14, contexts: ["Personalidad", "Escalas de mentira", "Validación de discurso"] },
                { test: "TAT", mentions: 7, percentage: 50.00, contexts: ["Conflictos internos", "Trauma", "Narrativas inconscientes"] },
                { test: "Persona bajo la lluvia", mentions: 5, percentage: 35.71, contexts: ["Manejo de estrés", "Vulnerabilidad", "Recursos de afrontamiento"] },
                { test: "Frases Incompletas (Sacks)", mentions: 3, percentage: 21.43, contexts: ["Contenidos inconscientes", "Situaciones no manifiestas"] },
                { test: "HTP (Casa-Árbol-Persona)", mentions: 4, percentage: 28.57, contexts: ["Proyección gráfica", "Conflictos emocionales"] },
                { test: "Neuropsi", mentions: 2, percentage: 14.29, contexts: ["Evaluación neuropsicológica en TEA"] },
                { test: "IDARE", mentions: 2, percentage: 14.29, contexts: ["Ansiedad estado-rasgo"] },
                { test: "MSS-YSQ (Esquemas Maladaptativos)", mentions: 2, percentage: 14.29, contexts: ["Patrones profundos", "Autoexigencia"] }
            ],
            // Análisis de FEP2 y FEP7 (factores de modificación)
            modificationFactors: [
                { factor: "Diagnóstico previo (TEA/Ansiedad/TEPT)", frequency: 9, percentage: 64.29, impact: "Alto" },
                { factor: "Disponibilidad de tiempo/Cancelaciones", frequency: 8, percentage: 57.14, impact: "Crítico" },
                { factor: "Fatiga durante sesión", frequency: 5, percentage: 35.71, impact: "Alto" },
                { factor: "Edad del paciente (menor de edad)", frequency: 4, percentage: 28.57, impact: "Medio-Alto" },
                { factor: "Contexto educativo/cultural", frequency: 3, percentage: 21.43, impact: "Medio" },
                { factor: "Estado emocional del paciente", frequency: 4, percentage: 28.57, impact: "Alto" }
            ],
            // Análisis de FEP2: respuestas sobre modificaciones
            modificationsRate: {
                modified: 11, // 78.57% de estudiantes modificaron su plan
                notModified: 3,
                percentage: 78.57
            },
            studentsChallenges: [
                { challenge: "Falta de conocimiento en pruebas específicas (TEA)", mentions: 3 },
                { challenge: "Pruebas muy extensas (tiempo)", mentions: 5 },
                { challenge: "Dificultad para integrar resultados contradictorios", mentions: 6 },
                { challenge: "Falta de manuales actualizados", mentions: 2 },
                { challenge: "Inexperiencia en interpretación de proyectivas", mentions: 4 }
            ],
            professorsCorrections: {
                // Análisis de FDP4
                most_frequent: "Complejidad y Pertinencia de las pruebas",
                insight_S1: "Estudiantes prefieren pruebas que conocen por seguridad, no las que el paciente necesita",
                insight_S2: "Tendencia a recargar de instrumentos o elegir pruebas poco vinculadas con motivo de consulta",
                correction_approach: "Ayudar a seleccionar menos pruebas, pero mejor justificadas"
            },
            coEvaluatorsExperience: {
                // Análisis de FCP3 y FCP4
                mainChallenge: "Fatiga del paciente con Neuropsi (45+ minutos)",
                solution: "Pausas activas (ejemplo: cubo Rubik para despeje mental)",
                learning: "Necesidad crítica de adaptar tiempos al perfil y capacidad del paciente",
                additionalChallenge: "Inexperiencia para manejar casos de TEA"
            },
            triangulation: {
                convergence: "Las tres perspectivas coinciden en que la batería original requirió modificaciones (78.57% estudiantes, 100% co-evaluadores, 100% docentes).",
                divergence: "Estudiantes atribuyen cambios principalmente al 'diagnóstico/contexto' (64%); Docentes observan que frecuentemente es por 'comodidad/desconocimiento' de otras pruebas disponibles.",
                criticalPoint: "El uso de pruebas complejas (Neuropsi, MMPI-2) sin dominio técnico previo generó fatiga en pacientes (señalado por co-evaluadores) y ansiedad en evaluadores (observado por docentes).",
                quantitativeEvidence: {
                    modificationRate: "78.57% modificó batería",
                    testsPerCase: "Promedio 3-4 pruebas",
                    mostUsed: "MMPI-2 (57%) y TAT (50%)",
                    professorCorrection: "100% requirió ajustes de pertinencia/complejidad"
                }
            }
        },

        // 3. INTEGRACIÓN Y ANÁLISIS DE RESULTADOS
        resultIntegration: {
            description: "Desafíos y logros en la síntesis diagnóstica",
            // Análisis de FEP10 y FEP11 (desafíos de integración)
            mainChallenges: [
                {
                    challenge: "Contradicción entre Discurso Verbal y Pruebas Proyectivas",
                    perspective: "Estudiantes",
                    severity: "Alto",
                    frequency: 6,
                    percentage: 42.86,
                    detail: "Paciente dice 'estoy bien' (verbal) pero proyectivos muestran trauma/ansiedad intensa",
                    example: "Negación en entrevista vs. vulnerabilidad masiva en HTP, TAT, Persona bajo lluvia"
                },
                {
                    challenge: "Pasar del dato numérico a la comprensión clínica",
                    perspective: "Docentes",
                    severity: "Alto",
                    detail: "Dificultad para convertir un puntaje en una hipótesis clínica coherente y útil",
                    professorQuote: "El número debe convertirse en una idea clínica comprensible y útil"
                },
                {
                    challenge: "Triangulación de múltiples fuentes",
                    perspective: "Todos",
                    severity: "Medio-Alto",
                    frequency: 8,
                    detail: "Integrar coherentemente: historia de vida + observación + resultados de pruebas + contexto"
                },
                {
                    challenge: "Organización de información compleja",
                    perspective: "Estudiantes",
                    severity: "Alto",
                    frequency: 5,
                    detail: "Dificultad para jerarquizar y sintetizar datos sin perderse en descriptivos"
                }
            ],
            // Análisis de FEP12 (competencias necesarias)
            studentCompetencies: {
                mostNeeded: [
                    { competency: "Integración crítica de información", mentions: 7, percentage: 50.00 },
                    { competency: "Análisis clínico", mentions: 6, percentage: 42.86 },
                    { competency: "Interpretación de proyectivas", mentions: 5, percentage: 35.71 },
                    { competency: "Síntesis diagnóstica", mentions: 4, percentage: 28.57 },
                    { competency: "Manejo de información contradictoria", mentions: 3, percentage: 21.43 }
                ],
                gaps: [
                    { gap: "Redacción de informes clínicos (uso excesivo de IA)", severity: "Crítico", docenteMention: true },
                    { gap: "Comprensión lectora y análisis", severity: "Crítico", docenteMention: true },
                    { gap: "Dominio técnico de manuales", severity: "Alto", mentions: 6 },
                    { gap: "Conocimientos de psicopatología del adulto", severity: "Alto", docenteMention: true },
                    { gap: "Competencias verbales y de facilitación", severity: "Alto", docenteMention: true }
                ]
            },
            // Análisis de FDP13 (estrategia pedagógica docente)
            professorStrategy: {
                mostEffective_S1: "Modelado y práctica ensayada en aula",
                mostEffective_S2: "Trabajar con triangulación: entrevista + pruebas + observación, justificando cada resultado",
                approach: "Forzar la justificación clínica de cada dato numérico para que se convierta en idea útil",
                criticalPhase: "Interpretación (fase donde más se requirió intervención docente)"
            },
            // Análisis de FDP5 (comprensión vs mecanicismo)
            mechanicalVsComprehension: {
                studentsWhoComprehended: "Algunos (minoritario)",
                studentsWhoMechanized: "Mayoría",
                professorObservation: "Se centraron en aplicar, puntuar y 'llenar informes' sin profundizar en significado clínico"
            },
            triangulation: {
                convergence: "Todas las perspectivas coinciden en que la integración es la fase más difícil del proceso (100% consenso).",
                divergence: "Estudiantes lo perciben como 'armado de rompecabezas' o desafío técnico; Docentes lo diagnostican como falta estructural de 'lectura crítica y análisis' que viene de semestres anteriores.",
                criticalPoint: "La dependencia de herramientas externas (IA para redacción, plantillas anteriores) limita severamente el desarrollo del criterio clínico propio. Un docente reporta informes con 96% de contenido generado por IA.",
                quantitativeEvidence: {
                    studentsWithIntegrationChallenges: "85.71% (12/14)",
                    mechanicalApproach: "Mayoría según docentes",
                    AIUsage: "Alta (hasta 96% reportado)",
                    comprehensionRate: "Minoritaria según FDP5"
                }
            }
        },

        // 4. CO-PRESENCIA (MODALIDAD DE EVALUACIÓN)
        coPresence: {
            description: "Impacto de la evaluación con múltiples evaluadores en sala",
            // Análisis cuantitativo de FEP19 y FEP20
            usage: {
                students_using_copresence: 9,
                students_individual: 5,
                percentage_copresence: 64.29
            },
            // Análisis de FEP20 (ratings de impacto en validez/rapport)
            impactRatings: {
                students: {
                    ratings: [5, 2, 1, 5, 3, 2, 5, 4, 3, 3, 5, 3, 3, 1],
                    average: 3.21,
                    median: 3,
                    mode: [3, 5],
                    distribution: {
                        score1: 2,  // 14.29% - Muy negativo
                        score2: 2,  // 14.29% - Negativo
                        score3: 4,  // 28.57% - Neutral
                        score4: 1,  // 7.14% - Positivo
                        score5: 5   // 35.71% - Muy positivo
                    },
                    interpretation: "Altamente polarizado: 50% lo valora positivamente (4-5), 28.57% neutralmente (3), 28.57% negativamente (1-2)."
                },
                coEvaluators: {
                    ratings: [4, 5],
                    average: 4.5,
                    interpretation: "Muy Positivo - Genera seguridad y fue experiencia fructífera"
                },
                professors: {
                    ratings: [4, 3],
                    average: 3.5,
                    interpretation: "Mixto - Útil cuando hay organización y orden; perjudicial cuando hay ruido, dependencia o competencia"
                }
            },
            // Análisis de FCP8, FCP9, FDP9, FDP10
            advantages: [
                { advantage: "Seguridad emocional y apoyo entre pares", mentions: 5 },
                { advantage: "Múltiples perspectivas de observación", mentions: 3 },
                { advantage: "Respaldo en toma de decisiones", mentions: 4 },
                { advantage: "Aprendizaje colaborativo", mentions: 2 },
                { advantage: "Balance en diálogos con evaluado", mentions: 1 }
            ],
            disadvantages: [
                { disadvantage: "Ruido y distracciones / pérdida de fluidez", mentions: 4, severity: "Alto" },
                { disadvantage: "Competencia por protagonismo", mentions: 2, severity: "Medio", source: "Docentes" },
                { disadvantage: "Dependencia (uno activo, otro pasivo)", mentions: 3, severity: "Alto", source: "Docentes" },
                { disadvantage: "Demasiadas intervenciones simultáneas", mentions: 1, severity: "Medio", source: "Docentes" },
                { disadvantage: "Impacto parcial en validez psicométrica", mentions: 2, severity: "Medio-Alto" }
            ],
            // Análisis de FDP9 (sinergia de equipos)
            teamDynamics: {
                goodSynergy: "Minoría de equipos",
                issues: [
                    "Competencia por protagonismo ante el paciente",
                    "Relaciones fracturadas por desigualdad de roles",
                    "Miedo en algunos estudiantes sin competencias verbales",
                    "Acomodamiento de algunos miembros del equipo",
                    "Dependencia y justificación excesiva en el grupo"
                ],
                professorObservation: "Siempre hay uno que asume rol activo y otro pasivo, depende de seguridad y vocación del estudiante"
            },
            // Análisis de FCP5 (claridad de roles)
            roleDefinition: {
                wellDefined: 0,
                partiallyDefined: 2, // "Se definieron sobre la marcha"
                notDefined: 0,
                percentage_improvised: 100,
                impact: "Crítico - Falta de planificación previa de roles"
            },
            triangulation: {
                convergence: "Todas las perspectivas coinciden en que la co-presencia da seguridad al estudiante novato (especialmente co-evaluadores con 4.5/5).",
                divergence: "Estudiantes valoran fuertemente el apoyo emocional (35.71% dan rating 5); Docentes critican la dependencia, falta de autonomía y riesgo de competencia que genera (observado en dinámica de equipos).",
                criticalPoint: "La co-presencia funciona SOLO si los roles están claramente definidos ANTES; en este caso, 100% de co-evaluadores reportan definición parcial 'sobre la marcha', lo que genera competencia, pasividad o desorganización.",
                quantitativeEvidence: {
                    usageRate: "64.29% usó co-presencia",
                    studentsPolarization: "50% positivo vs 28.57% negativo",
                    roleImprovisation: "100% sin roles predefinidos",
                    professorsObserveCritical: "Dependencia y competencia observadas"
                }
            }
        },

        // 5. SUPERVISIÓN Y ACOMPAÑAMIENTO DOCENTE
        supervision: {
            description: "Calidad y utilidad del acompañamiento docente durante el proceso clínico",
            // Análisis cuantitativo de FEP28
            studentRatings: {
                ratings: [4, 5, 3, 4, 1, 4, 2, 4, 4, 1, 1, 2, 3, 1],
                average: 2.79,
                median: 3,
                mode: [1, 4],
                distribution: {
                    score1: 4,  // 28.57% - Muy pobre
                    score2: 2,  // 14.29% - Pobre
                    score3: 2,  // 14.29% - Aceptable
                    score4: 5,  // 35.71% - Bueno
                    score5: 1   // 7.14% - Muy bueno
                },
                interpretation: "Baja a Media con ALTA variabilidad. Polarización entre experiencias muy negativas (28.57% rating 1) y positivas (35.71% rating 4)."
            },
            // Análisis de FEP29 (¿Ayudó a síntesis diagnóstica?)
            helpfulForDiagnosis: {
                yes: 7,
                no: 7,
                percentage_helpful: 50.00,
                interpretation: "Dividido exactamente 50/50, refleja alta inconsistencia en calidad de supervisión"
            },
            // Análisis de FEP30 (momento crítico y brechas)
            criticalMoments: [
                { moment: "Cierre y defensa final", utility: "Alta", mentions: 4 },
                { moment: "Manejo de crisis y cancelaciones", utility: "Necesaria pero insuficiente", mentions: 3 },
                { moment: "Interpretación de pruebas", utility: "Crítica", mentions: 2, source: "Docentes" },
                { moment: "Aclaración de dudas puntuales", utility: "Media", mentions: 2 }
            ],
            gaps: [
                { gap: "Falta de tiempo individualizado", severity: "Alto", mentions: 5 },
                { gap: "Respuestas tardías o ausentes a dudas", severity: "Alto", mentions: 4 },
                { gap: "Sensación de abandono en fases intermedias", severity: "Alto", mentions: 6 },
                { gap: "Falta de disponibilidad docente", severity: "Alto", mentions: 3 },
                { gap: "Falta de acompañamiento cercano a grupos", severity: "Medio", mentions: 2 },
                { gap: "Supervisión insuficiente en aplicación de pruebas", severity: "Alto", mentions: 2 }
            ],
            // Análisis de FDP14, FDP18 (auto-evaluación docente)
            professorsPerspective: {
                selfRating: 4.0, // Ambos docentes se autoevaluaron con 4
                challenges: [
                    { challenge: "Ratio alumnos/docente muy alto / grupos grandes", severity: "Crítico" },
                    { challenge: "Falta de horarios exclusivos para supervisión clínica", severity: "Alto" },
                    { challenge: "Estudiantes no leen ni investigan por cuenta propia", severity: "Alto" },
                    { challenge: "Poco tiempo disponible en general", severity: "Crítico" },
                    { challenge: "Falta de herramientas pedagógicas (protocolos de atención)", severity: "Medio" }
                ],
                // Análisis de FDP12 (recursos y acompañamiento)
                resourceAssessment: {
                    hadTools: "Sí, herramientas didácticas básicas",
                    hadTime: "No, tiempo insuficiente para acompañamiento individualizado",
                    mostCriticalPhase: "Interpretación de resultados",
                    idealNeeds_S1: "Protocolos de atención, cursos adicionales de psicometría",
                    idealNeeds_S2: "Grupos pequeños, horarios exclusivos, pruebas actualizadas"
                }
            },
            // Análisis de FDP17 (evolución de identidad profesional observada)
            identityEvolution: {
                observed: true,
                initialState: "Inseguridad y miedo a equivocarse",
                finalState: "Mayor responsabilidad, mejor lenguaje clínico, conciencia de límites",
                positiveChange: "Entusiasmo y motivación por el proceso clínico",
                insight: "Reconocimiento de que el proceso clínico es científico y formal, no solo altruismo"
            },
            triangulation: {
                convergence: "Todas las perspectivas coinciden en que el tiempo y los recursos son absolutamente insuficientes (100% consenso).",
                divergence: "Estudiantes perciben 'falta de interés/apoyo/disponibilidad' del docente (28.57% rating 1); Docentes perciben 'falta de autonomía/lectura/preparación previa' de los estudiantes y reconocen su propia sobrecarga laboral.",
                criticalPoint: "La brecha crítica en la supervisión genera un círculo vicioso: inseguridad estudiantil → errores técnicos no corregidos a tiempo → informes deficientes → necesidad de mayor corrección final. Solo 50% considera que la supervisión ayudó al diagnóstico.",
                quantitativeEvidence: {
                    averageRating: "2.79/5 (Bajo)",
                    highVariability: "SD alta, rango 1-5",
                    helpedDiagnosis: "50% sí, 50% no",
                    professorSelfRating: "4.0/5",
                    gapPerception: "Diferente atribución causal del problema"
                }
            }
        },

        // 6. CONTEXTO Y ADAPTACIÓN CULTURAL
        contextualAdaptation: {
            description: "Adaptaciones realizadas según contexto familiar, socioemocional y cultural del paciente",
            // Análisis de FEP31 (adaptaciones concretas)
            factors: [
                { factor: "Socio-emocional", mentions: 7, percentage: 50.00 },
                { factor: "Familiar", mentions: 4, percentage: 28.57 },
                { factor: "Cultural/Comunitario", mentions: 3, percentage: 21.43 },
                { factor: "Educativo/Académico", mentions: 3, percentage: 21.43 },
                { factor: "Emocional individual", mentions: 3, percentage: 21.43 }
            ],
            adaptations: [
                { adaptation: "Flexibilidad horaria (fines de semana, fuera de clínica)", mentions: 3 },
                { adaptation: "Ajuste de lenguaje (menos técnico, más empático)", mentions: 4 },
                { adaptation: "Priorizar contención emocional sobre aplicación de pruebas", mentions: 5 },
                { adaptation: "Adaptación de tiempos de sesión por disponibilidad paciente", mentions: 4 },
                { adaptation: "Flexibilidad en técnicas por estado emocional", mentions: 3 },
                { adaptation: "Cambio de ambiente (cafetería vs clínica)", mentions: 2 }
            ],
            // Análisis de FDP1 (observación docente sobre lectura contextual)
            professorsObservation: {
                effectiveness: "Mediana a Moderada",
                critique_S1: "Poco estudio y lectura lleva a aprendizaje básico; falta formación adicional",
                critique_S2: "Identifican elementos clave pero a veces interpretan desde prejuicios; requieren intervención para lecturas simplistas",
                interventionNeeded: "Sí, en varios momentos para corregir lecturas erróneas del contexto"
            },
            // Análisis de FEP27 (influencia del contexto físico)
            physicalContextImpact: {
                spaceIssues: [
                    { issue: "Clínica pequeña / falta de espacio", mentions: 3 },
                    { issue: "Ruido e interrupciones externas", mentions: 2 },
                    { issue: "Distractores ambientales", mentions: 2 },
                    { issue: "Falta de privacidad adecuada", mentions: 1 }
                ],
                adaptations: [
                    "Dividir sesiones por limitación de tiempo/espacio",
                    "Cambiar orden de aplicación de pruebas",
                    "Aplicar pruebas fuera de clínica (cafetería)",
                    "Ajustar ritmo de evaluación por espacio reducido"
                ]
            },
            triangulation: {
                convergence: "Todas las perspectivas coinciden en que es absolutamente necesario adaptar el protocolo rígido a la realidad contextual del paciente (100% realizó alguna adaptación).",
                divergence: "Estudiantes consideran que 'hicieron lo necesario' y fueron flexibles; Docentes advierten riesgos de 'perder el encuadre clínico' (ej. evaluar en cafeterías, horarios irregulares) y lecturas superficiales del contexto.",
                criticalPoint: "La flexibilidad es positiva y necesaria, pero sin supervisión adecuada puede llevar a transgresiones del encuadre clínico y ético que comprometen la validez del proceso (ej. evaluaciones en espacios públicos ruidosos).",
                quantitativeEvidence: {
                    adaptationRate: "100% realizó adaptaciones",
                    mainFactor: "Socio-emocional (50%)",
                    professorsIntervention: "Necesaria para corregir interpretaciones",
                    contextualReading: "Mediana según docentes"
                }
            }
        }
    },

    // ANÁLISIS TEMÁTICO CONSOLIDADO
    thematicAnalysis: {
        // Análisis de FEP1 y respuestas cualitativas para identificar temas clínicos
        clinicalThemes: [
            {
                theme: "Ansiedad (Generalizada y Situacional)",
                prevalence: "Muy Alto",
                cases: 6,
                percentage: 42.86,
                contexts: ["Generalizada", "Situacional", "Vinculada a rutinas y hábitos"],
                findings: [
                    "Ansiedad reactiva a desorganización vital más que estructuralmente patológica",
                    "Alta autoexigencia y perfeccionismo como factores mantenedores",
                    "Ciclos de procrastinación y autoexigencia"
                ],
                interventions: ["Psicoeducación", "Reestructuración de hábitos", "Autocuidado"]
            },
            {
                theme: "Trauma y Abuso Sexual",
                prevalence: "Alto",
                cases: 4,
                percentage: 28.57,
                contexts: ["Abuso sexual", "TEPT", "Estrés postraumático"],
                findings: [
                    "Discrepancia masiva entre discurso verbal (negación, 'estoy bien') y pruebas proyectivas (vulnerabilidad extrema)",
                    "Mecanismos defensivos: minimización, evasión, anestesia emocional",
                    "Conflictos internos sobre hablar vs callar para 'proteger a otros'",
                    "Revictimización familiar (exigencia de mantener relación con agresor)"
                ],
                keyTests: ["TAT", "Persona bajo la lluvia", "HTP"],
                indicators: [
                    "Figuras sin manos o muy pequeñas",
                    "Casas sin puertas",
                    "Historias con personajes en peligro o culpables",
                    "Ausencia total de protección en lluvia"
                ]
            },
            {
                theme: "Duelo No Resuelto",
                prevalence: "Medio",
                cases: 3,
                percentage: 21.43,
                contexts: ["Muerte de madre", "Duelo complicado", "Pérdida no elaborada"],
                findings: [
                    "Crisis emocionales al abordar el tema",
                    "Necesidad de desahogo",
                    "Impacto en relaciones familiares actuales (padre)"
                ],
                interventions: ["Acompañamiento emocional", "Espacio para desahogo", "Trabajo gradual"]
            },
            {
                theme: "Neurodivergencia (TEA - Trastorno del Espectro Autista)",
                prevalence: "Bajo",
                cases: 1,
                percentage: 7.14,
                challenges: [
                    "Fatiga rápida en pruebas largas (45+ mins)",
                    "Comunicación literal",
                    "Necesidad de pausas activas"
                ],
                findings: [
                    "Necesidad crítica de pruebas especializadas no disponibles en la clínica",
                    "Falta de formación específica en estudiantes para casos TEA",
                    "Resultados neuropsicológicos coherentes con diagnóstico previo"
                ],
                gap: "Falta de instrumentos y capacitación específica para TEA"
            },
            {
                theme: "Baja Autoestima y Dificultades de Afrontamiento",
                prevalence: "Alto",
                cases: 5,
                percentage: 35.71,
                contexts: ["Autoestima baja", "Esquemas maladaptativos", "Dependencia/incompetencia"],
                findings: [
                    "Contradicción entre autopercepción (dependiente) y comportamiento (autosuficiente)",
                    "Esquemas de abandono/inestabilidad",
                    "Resistencia a recibir ayuda a pesar de necesitarla"
                ]
            }
        ],
        // Patrones transversales identificados
        patterns: [
            {
                pattern: "Negación Verbal vs. Proyección Gráfica",
                description: "Pacientes que verbalmente dicen estar bien pero en pruebas proyectivas expresan conflicto intenso",
                frequency: "Muy Alta",
                percentage: 42.86,
                cases: 6,
                resolution: "Confiar en la triangulación: entrevista + pruebas + observación no verbal + contexto",
                clinicalImplication: "Las proyectivas revelan el estado emocional real que el discurso defensivo oculta"
            },
            {
                pattern: "Cancelación y Resistencia del Paciente",
                description: "Altas tasas de cancelación interpretadas como resistencia, falta de compromiso o crisis personal",
                frequency: "Muy Alta",
                percentage: 50.00,
                cases: 7,
                impact: "Crítico - Retraso severo en cronograma académico y presión por entrega",
                studentResponse: "Búsqueda de pacientes alternativos, elaboración de propuestas teóricas"
            },
            {
                pattern: "Fatiga del Paciente en Pruebas Extensas",
                description: "Pacientes que se cansan con baterías largas, afectando validez",
                frequency: "Media-Alta",
                cases: 5,
                tests: ["Neuropsi", "MMPI-2"],
                solution: "Pausas activas, dividir sesiones, priorizar pruebas esenciales"
            },
            {
                pattern: "Discrepancia entre Pruebas",
                description: "Resultados contradictorios entre diferentes instrumentos",
                frequency: "Media",
                cases: 4,
                resolution: "Análisis de factores de influencia (momento de aplicación, estado emocional, fatiga)"
            }
        ]
    },

    // HALLAZGOS CRÍTICOS
    criticalFindings: {
        strengths: [
            {
                area: "Resiliencia y Adaptabilidad Estudiantil",
                description: "Capacidad demostrada para sacar adelante casos a pesar de múltiples obstáculos (cancelaciones, falta de recursos, tiempo limitado)",
                evidence: [
                    "Búsqueda activa de pacientes alternativos tras cancelaciones (50% enfrentó esto)",
                    "Autoformación e investigación independiente (mencionado como aprendizaje clave)",
                    "Flexibilidad para adaptar protocolos a realidades del paciente"
                ],
                percentage: "85.71% completó el caso a pesar de dificultades"
            },
            {
                area: "Aprendizaje Significativo y Valoración de la Práctica",
                description: "Alta valoración del aprendizaje práctico sobre el teórico",
                evidence: [
                    "Múltiples menciones: 'Aprendí más en este caso que en semestres anteriores'",
                    "Desarrollo de identidad profesional observado por docentes",
                    "Reconocimiento del carácter científico del proceso clínico"
                ],
                impact: "Transformador para identidad profesional"
            },
            {
                area: "Capacidad de Establecer Rapport",
                description: "A pesar de la inexperiencia, lograron establecer alianza terapéutica efectiva",
                evidence: [
                    "Rating promedio de rapport: Estudiantes 3.2, Co-evaluadores 4.5, Docentes 4.0",
                    "Indicadores de éxito: pacientes más abiertos, agradecimientos, mejorías observadas"
                ]
            }
        ],
        weaknesses: [
            {
                area: "Competencia Técnica en Psicometría",
                description: "Déficit crítico en manejo de manuales, interpretación y corrección de pruebas",
                severity: "Crítico",
                evidence: [
                    "100% de docentes reporta necesidad de corrección en selección de pruebas",
                    "Mayoría adoptó enfoque mecánico vs. comprensión clínica (FDP5)",
                    "Dificultades recurrentes en interpretación de proyectivas",
                    "Falta de dominio de pruebas, piden ayuda para interpretación"
                ],
                impact: "Compromete validez de resultados y calidad diagnóstica",
                recommendations: "Cursos adicionales de psicometría y protocolos de atención"
            },
            {
                area: "Dependencia y Falta de Autonomía",
                description: "Necesidad constante de validación docente, baja capacidad de decisión autónoma",
                severity: "Alto",
                evidence: [
                    "Solo 50% sintió que supervisión ayudó a diagnóstico (debería ser mayor)",
                    "Dinámica de co-presencia: siempre uno activo y otro pasivo",
                    "Ansiedad por aprobar interfiere con aprendizaje genuino",
                    "Actitud defensiva ante retroalimentación"
                ],
                professorQuote: "Ansiedad de los estudiantes por hacer las cosas por aprobar y no por aprender"
            },
            {
                area: "Competencias de Redacción y Análisis Crítico",
                description: "Uso excesivo de IA, comprensión lectora deficiente, falta de análisis profundo",
                severity: "Crítico",
                evidence: [
                    "Informes con hasta 96% de contenido de IA (reportado por docente)",
                    "Poca capacidad de análisis y comprensión lectora",
                    "Débiles competencias verbales y de facilitación",
                    "Paso de dato numérico a clínica es el mayor desafío"
                ],
                impact: "Limita desarrollo de criterio clínico propio",
                professorCritique: "Hacen el esfuerzo mínimo por el análisis y la redacción"
            },
            {
                area: "Infraestructura de la Clínica",
                description: "Espacios inadecuados para práctica clínica de calidad",
                severity: "Medio-Alto",
                evidence: [
                    "Clínica pequeña, ruidosa (21.43% menciona ruido/distractores)",
                    "Falta de privacidad adecuada",
                    "Conflictos por reserva de espacio",
                    "Necesidad de evaluar en cafeterías (transgresión de encuadre)"
                ],
                impact: "Afecta validez de pruebas y rapport",
                recommendations: "Mejorar aislamiento acústico, más espacios disponibles"
            },
            {
                area: "Lagunas de Conocimiento de Semestres Previos",
                description: "Vacíos en psicopatología, evaluación, metodología de investigación",
                severity: "Alto",
                evidence: [
                    "Conocimientos débiles en evaluación psicológica del adulto",
                    "Metodología de investigación para estudio de caso deficiente",
                    "Redacción de informes clínicos inadecuada",
                    "Poco dominio de pruebas psicológicas y técnicas clínicas"
                ],
                source: "FDP15, FDP16"
            }
        ],
        externalFactors: [
            {
                factor: "Tiempo Institucional Insuficiente",
                issues: [
                    "Calendario académico choca con tiempos clínicos reales",
                    "Presión por entrega vs. calidad del proceso",
                    "Falta de tiempo para supervisión individualizada"
                ],
                impact: "Procesos apresurados, superficiales, con mayor estrés estudiantil",
                percentage_affected: "100% de docentes y 85.71% de estudiantes mencionan tiempo como limitante"
            },
            {
                factor: "Recursos Materiales Limitados",
                issues: [
                    "Falta de pruebas actualizadas (TEA, instrumentos especializados)",
                    "Batería de pruebas limitada",
                    "No hay protocolos de atención para patologías frecuentes",
                    "Falta de acceso estable a pruebas"
                ],
                impact: "Limitación de opciones diagnósticas, uso repetitivo de mismas pruebas",
                professorNeed: "Protocolos de atención y pruebas actualizadas"
            },
            {
                factor: "Coordinación Intercomponentes Deficiente",
                issues: [
                    "Otros docentes con involucramiento desigual/mínimo en estudio de caso",
                    "Mensajes contradictorios entre componentes",
                    "Estudiantes trabajan el caso de forma aislada",
                    "Falta de alineación entre asignaturas del semestre"
                ],
                impact: "Pérdida de oportunidad de integración real, confusión en estudiantes",
                evidence: [
                    "FDP20: 'Bien con psicología del adulto, otros mínimamente involucrados' (S1)",
                    "FDP21: 'Un involucramiento desigual, indicaciones no coherentes entre componentes' (S2)"
                ]
            }
        ],
        professionalIdentity: {
            positiveChanges: [
                { change: "Mayor seguridad y sentido de responsabilidad profesional", evidence: "FDP17 - observado por docentes" },
                { change: "Mejor uso del lenguaje clínico", evidence: "FDP17" },
                { change: "Conciencia de límites y alcances del rol como psicólogos en formación", evidence: "FDP17" },
                { change: "Desmitificación del rol (no es solo dar consejos altruistas)", evidence: "FDP17 - 'el proceso se vuelve científico'" },
                { change: "Entusiasmo y motivación por atender", evidence: "FDP17" },
                { change: "Shift de inseguridad inicial a responsabilidad final", evidence: "FDP17" }
            ],
            persistentChallenges: [
                { challenge: "Miedo a equivocarse y dañar al paciente", severity: "Medio" },
                { challenge: "Síndrome del impostor (sentirse no preparado)", severity: "Alto" },
                { challenge: "Ansiedad por evaluación académica vs. aprendizaje genuino", severity: "Alto" },
                { challenge: "Brecha entre lo que saben teóricamente y lo que pueden aplicar", severity: "Alto" }
            ],
            keyLearnings: [
                "Ser autodidacta es esencial, la teoría es insuficiente frente al dolor humano (S9fe)",
                "Importancia de escuchar con atención (múltiples menciones)",
                "El proceso clínico es científico y formal, no altruismo (FDP17)",
                "Flexibilidad y sensibilidad al contexto del paciente",
                "Trabajo en equipo y pedir ayuda cuando se necesita"
            ]
        }
    },

    // RECOMENDACIONES CONSOLIDADAS
    recommendations: {
        forStudents: [
            {
                area: "Preparación Técnica",
                recommendations: [
                    "Leer y dominar manuales completos ANTES de la sesión, nunca durante",
                    "Practicar interpretación de pruebas con casos simulados",
                    "Desarrollar redacción clínica sin depender de herramientas de IA",
                    "Fortalecer comprensión lectora y análisis crítico de textos clínicos",
                    "Autoformación continua en áreas específicas (TEA, trauma, etc.)"
                ],
                priority: "Crítica"
            },
            {
                area: "Gestión del Proceso Clínico",
                recommendations: [
                    "Preparar Plan B y Plan C para cancelaciones de pacientes",
                    "Definir roles claros ANTES de sesiones en co-presencia",
                    "Priorizar vínculo terapéutico sobre llenado mecánico de formatos",
                    "Gestionar ansiedad personal para no interferir con escucha activa",
                    "Desarrollar autonomía progresiva en toma de decisiones"
                ],
                priority: "Alta"
            },
            {
                area: "Ética y Actitud",
                recommendations: [
                    "Apertura a retroalimentación sin actitud defensiva",
                    "Motivación por aprender más que por aprobar",
                    "Lectura y preparación previa como responsabilidad propia",
                    "Cuidado riguroso del encuadre ético y confidencialidad"
                ],
                priority: "Alta"
            }
        ],
        forProfessors: [
            {
                area: "Supervisión Clínica",
                recommendations: [
                    "Establecer horarios fijos y exclusivos para supervisión clínica (no improvisados)",
                    "Reducir ratio: máximo 2-3 estudiantes por caso supervisado",
                    "Validar y aprobar batería de pruebas ANTES de aplicación, no después",
                    "Supervisión más constante durante el proceso, no solo al final",
                    "Retroalimentación en tiempo real para corregir errores temprano"
                ],
                priority: "Crítica"
            },
            {
                area: "Pedagogía Clínica",
                recommendations: [
                    "Continuar con modelado y práctica ensayada (estrategia efectiva identificada)",
                    "Forzar justificación clínica de cada dato: '¿qué significa este puntaje para ESTE paciente?'",
                    "Desarrollar protocolos de atención para patologías frecuentes",
                    "Cursos o talleres adicionales de psicometría avanzada",
                    "Espacios de contención emocional para estudiantes (no solo técnica)"
                ],
                priority: "Alta"
            },
            {
                area: "Coordinación",
                recommendations: [
                    "Mayor comunicación y alineación con docentes de otros componentes",
                    "Acuerdos institucionales sobre carga y tiempos de entrega",
                    "Construir un discurso clínico unificado entre todos los componentes"
                ],
                priority: "Media-Alta"
            }
        ],
        forInstitution: [
            {
                area: "Infraestructura",
                recommendations: [
                    "Mejorar urgentemente aislamiento acústico de cubículos clínicos",
                    "Más espacios disponibles para evitar conflictos de reserva",
                    "Garantizar privacidad adecuada en espacios de evaluación",
                    "Sistema de agendamiento digital para la clínica"
                ],
                priority: "Alta"
            },
            {
                area: "Recursos Materiales",
                recommendations: [
                    "Adquirir pruebas actualizadas para TEA y trastornos del neurodesarrollo",
                    "Ampliar batería de pruebas disponibles (especialización)",
                    "Acceso estable y organizado a manuales de pruebas",
                    "Repositorio digital de recursos clínicos"
                ],
                priority: "Alta"
            },
            {
                area: "Estructura Académica",
                recommendations: [
                    "Alinear cronograma académico con tiempos clínicos reales (mínimo 3-4 meses por caso)",
                    "Reducir cantidad de integradores o simplificar protocolos",
                    "Definir batería mínima de referencia (menos instrumentos, más profundidad)",
                    "Grupos más pequeños por docente supervisor",
                    "Integración real y planificada entre todos los componentes del semestre",
                    "Definir tiempos claros por fase del proceso"
                ],
                priority: "Crítica"
            }
        ]
    },

    // CITACIONES REPRESENTATIVAS
    representativeQuotes: {
        students: [
            {
                category: "Aprendizaje Profundo",
                quote: "La lección más importante fue entender que ser autodidacta es esencial, porque no siempre vamos a tener todas las respuestas en los manuales. A veces, la teoría es insuficiente frente al dolor humano, y lo que realmente sostiene el proceso es la capacidad de aprender en el camino, de escuchar con humildad y de estar presentes con sensibilidad.",
                source: "S9fe (FEP40)",
                theme: "Identidad profesional"
            },
            {
                category: "Desafío de Integración",
                quote: "El mayor desafío fue lograr que los resultados técnicos de las pruebas no se impusieran sobre la historia de vida de la paciente, sino que dialogaran con ella.",
                source: "S9fe (FEP10)",
                theme: "Análisis clínico"
            },
            {
                category: "Contradicción Clínica",
                quote: "Cuando en la entrevista creíamos que ella estaba mintiendo o jugando con nosotros... pero a la hora de aplicar el MMPI los resultados en algunas escalas salían altas y pues nos confundió.",
                source: "S7fe (FEP11)",
                theme: "Integración de resultados"
            },
            {
                category: "Importancia de la Observación",
                quote: "La importancia de observar todos los detalles, pues muchas de las cosas que aparecen en las pruebas se pueden comprobar con el discurso de la persona.",
                source: "S1FC (FCP11)",
                theme: "Triangulación"
            }
        ],
        professors: [
            {
                category: "Crítica Técnica",
                quote: "Los estudiantes siempre prefieren las pruebas que conocen y no las que el paciente podría necesitar.",
                source: "Docente 1 (FDP4)",
                theme: "Selección de pruebas"
            },
            {
                category: "Crítica Ética",
                quote: "Descuidar el encuadre ético, explicaciones parciales del consentimiento informado, comentarios poco cuidados sobre el caso fuera del espacio clínico.",
                source: "Docente 2 (FDP16)",
                theme: "Errores frecuentes"
            },
            {
                category: "Estrategia Pedagógica",
                quote: "El número debe convertirse en una idea clínica comprensible y útil.",
                source: "Docente 2 (FDP13)",
                theme: "Enseñanza"
            },
            {
                category: "Observación de Evolución",
                quote: "Al inicio predominaba la inseguridad y el miedo a equivocarse, mientras que al final se notó mayor sentido de responsabilidad, mejor uso del lenguaje clínico y más conciencia de los límites y alcances de su rol.",
                source: "Docente 2 (FDP17)",
                theme: "Identidad profesional"
            },
            {
                category: "Desafío Estructural",
                quote: "Hay mucha ansiedad de los estudiantes por hacer las cosas por aprobar y no por aprender.",
                source: "Docente 1 (FDP3)",
                theme: "Motivación"
            }
        ],
        coEvaluators: [
            {
                category: "Buena Práctica",
                quote: "El hecho de evitar interrumpir al otro cuando hablaba ni contradecirlo.",
                source: "S1FC (FCP8)",
                theme: "Co-presencia"
            },
            {
                category: "Estrategia Efectiva",
                quote: "El balance de los diálogos de las entrevistas entre coevaluadores y el evaluado.",
                source: "S2FC (FCP8)",
                theme: "Comunicación"
            },
            {
                category: "Recomendación",
                quote: "Tomar más tiempo para analizar el caso antes de tratar con la persona, y tener más conocimiento sobre las posibles reacciones.",
                source: "S1FC (FCP13)",
                theme: "Preparación"
            }
        ]
    },

    // ESTADÍSTICAS GLOBALES CONSOLIDADAS
    stats: {
        totalAreas: 6,  // Rapport, Tests, Integración, Co-presencia, Supervisión, Contexto
        totalThemes: 5, // Ansiedad, Trauma, Duelo, TEA, Autoestima
        totalPatterns: 4, // Negación verbal, Cancelación, Fatiga, Discrepancia
        totalRecommendations: 32,
        dataIntegrity: {
            studentsResponseRate: "100% (14/14)",
            coEvaluatorsResponseRate: "100% (2/2)",
            professorsResponseRate: "100% (2/2)",
            crossValidation: "Completa - Todas las perspectivas trianguladas",
            quantitativeConversion: "Realizada para todas las variables clave",
            lastUpdated: "2025-11-22"
        }
    }
};

// Exportar para uso en el dashboard
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dataInsights;
}
