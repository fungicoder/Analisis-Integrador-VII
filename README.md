# Análisis Integrador VII

**Sistematización de Experiencias del Estudio de Casos del Componente Integrador VII de la Carrera de Psicología**

CUR-Estelí, UNAN-Managua

## 📋 Descripción del Proyecto

Este proyecto contiene una aplicación web interactiva para la sistematización y análisis de experiencias del Estudio de Casos del componente Integrador VII de la carrera de Psicología. Incluye una landing page con información del proyecto y un dashboard interactivo para visualizar y analizar los datos recopilados.

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Abre el archivo `index.html` en tu navegador web preferido (Chrome, Edge, Firefox)
2. Serás redirigido automáticamente a la página de inicio

### Opción 2: Navegación Manual
- **Landing Page**: Abre `src/landing/index.html`
- **Dashboard**: Abre `src/dashboard/index.html`

## 📁 Estructura del Proyecto

```
Analisis Integrador VII/
├── index.html                      # Punto de entrada principal (redirige a landing)
├── README.md                       # Este archivo
│
├── src/                            # Todo el código fuente
│   ├── landing/                    # Landing page y páginas de presentación
│   │   ├── index.html             # Página de entrada (portada)
│   │   ├── presentacion.html      # Presentación del proyecto
│   │   ├── introduccion.html      # Introducción y contexto
│   │   ├── metodologia.html       # Marco metodológico
│   │   ├── objetivos.html         # Objetivos de investigación
│   │   └── analisis.html          # Análisis general
│   │
│   ├── dashboard/                  # Dashboard interactivo
│   │   ├── index.html             # Dashboard principal
│   │   └── views/                 # Vistas específicas del dashboard
│   │       ├── critical.html      # Temas críticos
│   │       ├── insights.html      # Insights consolidados
│   │       ├── participation.html # Análisis de participación
│   │       ├── positivity.html    # Índice de positividad
│   │       └── words.html         # Análisis de palabras clave
│   │
│   ├── js/                         # JavaScript organizado
│   │   ├── dashboard/             # JS específico del dashboard
│   │   │   ├── app.js            # Aplicación principal
│   │   │   ├── analysis.js       # Utilidades de análisis
│   │   │   ├── insights-loader.js # Cargador de insights
│   │   │   └── view-init.js      # Inicialización de vistas
│   │   └── data/                  # Archivos de datos JS
│   │       ├── data_fc.js        # Datos Co-Evaluadores
│   │       ├── data_fd.js        # Datos Docentes
│   │       ├── data_fe.js        # Datos Estudiantes
│   │       └── data_insights.js  # Datos de insights
│   │
│   ├── css/                        # Estilos organizados
│   │   └── dashboard.css          # Estilos del dashboard
│   │
│   └── assets/                     # Assets estáticos
│       ├── images/                # Imágenes
│       │   └── logo.png          # Logo de la universidad
│       └── data-sources/          # Archivos CSV originales
│           ├── codificacion_fc.csv
│           ├── codificacion_fd.csv
│           ├── codificacion_fe.csv
│           └── formulario.xlsx
│
├── docs/                           # Documentación técnica
│   ├── DASHBOARD_README.md        # README original del dashboard
│   ├── GUIA_VALIDACION_INSIGHTS.md
│   ├── REPORTE_TRIANGULACION.md
│   └── RESUMEN_ACTUALIZACION_INSIGHTS.md
│
└── data/                           # Datos originales (respaldo)
    └── ...
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura de las páginas
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de la aplicación

### Librerías CDN
- **Font Awesome 6.4.0**: Iconos
- **Google Fonts (Inter)**: Tipografía
- **PapaParse 5.4.1**: Procesamiento de CSV (si aplicable)

### Características
- ✅ **100% Offline**: No requiere servidor, funciona completamente en el navegador
- ✅ **Responsive**: Adaptable a diferentes tamaños de pantalla
- ✅ **Modular**: Código organizado por funcionalidad
- ✅ **Sin dependencias externas**: Solo requiere un navegador moderno

## 📊 Datasets Disponibles

El dashboard permite visualizar tres conjuntos de datos:

1. **FE** - Estudiantes: Respuestas y evaluaciones de los estudiantes
2. **FC** - Co-Evaluadores: Evaluaciones de pares
3. **FD** - Docentes: Evaluaciones y observaciones docentes

## 🎨 Funcionalidades del Dashboard

### Vista Principal
- Resumen ejecutivo con métricas clave
- Matriz de sentimientos interactiva
- Distribución global de respuestas
- Palabras clave más frecuentes

### Vistas Espec Entity íficas
- **Participación**: Análisis de participantes
- **Positividad**: Índice de positividad de respuestas
- **Palabras**: Análisis de palabras clave
- **Críticos**: Identificación de temas críticos
- **Insights**: Conclusiones consolidadas

### Interactividad
- Selector de dataset dinámico
- Búsqueda global
- Modales con detalles
- Filtros y visualizaciones

## 👥 Autores

- Engel Enoc Velásquez Zamora
- Dina Fabiola García Torres

## 📝 Licencia y Uso

Este proyecto es parte del trabajo académico del Componente Integrador VII de la carrera de Psicología en CUR-Estelí, UNAN-Managua.

## 🔧 Soporte Técnico

### Requisitos del Sistema
- Navegador web moderno (Chrome 90+, Firefox 88+, Edge 90+, Safari 14+)
- JavaScript habilitado
- Conexión a internet (solo para cargar CDNs de iconos y fuentes en la primera carga)

### Problemas Comunes

**Los estilos no cargan correctamente:**
- Verifica que todos los archivos estén en las ubicaciones correctas según la estructura de carpetas
- Asegúrate de abrir desde un navegador (no un editor de texto)

**Los datos no se visualizan:**
- Verifica que los archivos de datos JS estén presentes en `src/js/data/`
- Abre la consola del navegador (F12) para ver posibles errores

**Las fuentes o iconos no se ven:**
- Requiere conexión a internet para cargar desde CDN
- Una vez cargados, se almacenan en caché

## 📅 Última Actualización

Noviembre 2025 - Reorganización completa de la estructura del proyecto siguiendo mejores prácticas de desarrollo web.

---

**CUR-Estelí, UNAN-Managua**  
Carrera de Psicología - Componente Integrador VII
