# GUÍA DE VALIDACIÓN MANUAL - PÁGINA DE INSIGHTS

**Fecha:** 2025-11-22  
**Versión:** 2.0  
**Propósito:** Verificar el correcto funcionamiento de la página de insights actualizada

---

## 📋 LISTA DE VERIFICACIÓN

### ✅ Paso 1: Abrir la Página

1. Abrir en navegador: `file:///c:/Users/Fabu/OneDrive/Desktop/Analisis%20Integrador%20VII/dashboard/views/insights.html`

2. **Verificar carga inicial:**
   - [ ] La página carga sin errores
   - [ ] El título muestra: "Insights Consolidados - Integrador VII"
   - [ ] El header muestra: "💡 Insights Consolidados"
   - [ ] El subtítulo muestra: "Análisis triangulado de las perspectivas de Estudiantes, Co-Evaluadores y Docentes"

---

### ✅ Paso 2: Verificar Consola del Navegador

**Abrir consola:** F12 o Ctrl+Shift+J

**Buscar el mensaje:**
```
✅ Insights cargados: Object { totalParticipants: {...}, totalQuestions: {...}, ... }
```

**Verificar que NO hay errores:**
- [ ] No hay mensajes rojos de error
- [ ] No dice "dataInsights no está definido"
- [ ] No hay errores de carga de archivos .js

---

### ✅ Paso 3: Verificar Resumen Ejecutivo (Stats Grid)

**Debe mostrar 6 tarjetas con los siguientes valores:**

| Tarjeta | Valor Esperado | Estado |
|---------|----------------|---------|
| Estudiantes | 14 | [ ] |
| Co-Evaluadores | 2 | [ ] |
| Docentes | 2 | [ ] |
| Áreas de Análisis | 6 | [ ] |
| Temas Clínicos | 5 | [ ] |
| Patrones Identificados | 4 | [ ] |

**Verificar:**
- [ ] Todas las tarjetas se ven correctamente
- [ ] Los números son grandes y en color primario
- [ ] Las etiquetas son claras y en mayúsculas

---

### ✅ Paso 4: Verificar Análisis Transversal (6 Tabs)

#### Tab 1: Rapport y Alianza ✓

**Hacer clic en "Rapport y Alianza"**

**Verificar que se muestra:**
- [ ] **Perspectiva de Estudiantes**
  - [ ] Técnicas Más Usadas (lista con porcentajes)
  - [ ] Desafíos (lista)
  
- [ ] **Perspectiva de Co-Evaluadores**
  - [ ] Rating: 4.5/5
  - [ ] Impacto: (texto)
  
- [ ] **Perspectiva de Docentes**
  - [ ] Rating: 4/5
  - [ ] Observaciones (lista)
  
- [ ] **Triangulación**
  - [ ] Badge verde "Convergencia" con texto
  - [ ] Badge rojo "Divergencia" con texto
  - [ ] Badge naranja "Punto Crítico" con texto

#### Tab 2: Selección de Pruebas ✓

**Hacer clic en "Selección de Pruebas"**

**Verificar que se muestra:**
- [ ] **Pruebas Más Utilizadas** (lista de al menos 5 pruebas)
- [ ] **Factores de Modificación** (lista con impactos)
- [ ] **Triangulación** (badges de convergencia/divergencia/punto crítico)

#### Tab 3: Integración de Resultados ✓

**Hacer clic en "Integración de Resultados"**

**Verificar que se muestra:**
- [ ] **Principales Desafíos** (lista con perspectivas)
- [ ] **Competencias Necesarias (Estudiantes)** (lista)
- [ ] **Triangulación** (badges)

#### Tab 4: Co-presencia ✓

**Hacer clic en "Co-presencia"**

**Verificar que se muestra:**
- [ ] **Impacto Percibido** con ratings de las 3 perspectivas
  - Estudiantes: Rating + interpretación
  - Co-Evaluadores: Rating + interpretación
  - Docentes: Rating + interpretación
- [ ] **Ventajas vs Desventajas** (dos columnas)
- [ ] **Triangulación** (badges)

#### Tab 5: Supervisión Docente ✓

**Hacer clic en "Supervisión Docente"**

**Verificar que se muestra:**
- [ ] **Calidad Percibida**
  - Rating Estudiantes: (número)/5
  - Auto-evaluación Docente: (número)/5
- [ ] **Brechas Identificadas** (lista)
- [ ] **Triangulación** (badges)

#### Tab 6: Contexto Cultural ✓

**Hacer clic en "Contexto Cultural"**

**Verificar que se muestra:**
- [ ] **Factores Contextuales** (lista con número de menciones)
- [ ] **Adaptaciones Realizadas** (lista)
- [ ] **Triangulación** (badges)

#### Verificación de Navegación entre Tabs

- [ ] Al hacer clic en cada tab, el tab se marca como "active" (color primario)
- [ ] El contenido cambia correctamente
- [ ] No hay contenido duplicado
- [ ] La animación de fadeIn funciona suavemente

---

### ✅ Paso 5: Verificar Temas Clínicos Principales

**Scroll hacia abajo a la sección "Temas Clínicos Principales"**

**Verificar que se muestran tarjetas para:**
- [ ] Ansiedad (Generalizada y Situacional) - Prevalencia: Muy Alto
- [ ] Trauma y Abuso Sexual - Prevalencia: Alto
- [ ] Duelo No Resuelto - Prevalencia: Medio
- [ ] Neurodivergencia (TEA) - Prevalencia: Bajo
- [ ] Baja Autoestima - Prevalencia: Alto

**Cada tarjeta debe mostrar:**
- [ ] Título del tema
- [ ] Badge con prevalencia
- [ ] Contextos (si aplica)
- [ ] Intervenciones (si aplica)

---

### ✅ Paso 6: Verificar Hallazgos Críticos (4 Tabs)

#### Tab 1: Fortalezas ✓

**Hacer clic en "Fortalezas"**

**Verificar que se muestran al menos 2-3 tarjetas con:**
- [ ] **Área** como título
- [ ] **Descripción** del área
- [ ] **Evidencia** en lista

**Verificar áreas esperadas:**
- [ ] Resiliencia Estudiantil
- [ ] Aprendizaje Significativo
- [ ] Capacidad de Establecer Rapport (posible)

#### Tab 2: Debilidades ✓

**Hacer clic en "Debilidades"**

**Verificar que se muestran tarjetas con:**
- [ ] **Área** como título con badge de severidad (naranja)
- [ ] **Descripción**
- [ ] **Impacto** (si aplica)
- [ ] Borde izquierdo en color rojo

**Verificar áreas esperadas:**
- [ ] Competencia Técnica - Severidad: Crítico
- [ ] Dependencia - Severidad: Alto
- [ ] Infraestructura - Severidad: Medio

#### Tab 3: Factores Externos ✓

**Hacer clic en "Factores Externos"**

**Verificar que se muestran tarjetas con:**
- [ ] **Factor** como título
- [ ] **Problemas o Impacto** como descripción

**Verificar factores esperados:**
- [ ] Tiempo Institucional
- [ ] Recursos Materiales
- [ ] (Puede haber más)

#### Tab 4: Identidad Profesional ✓

**Hacer clic en "Identidad Profesional"**

**Verificar que se muestran 2-3 tarjetas con:**
- [ ] **Cambios Positivos** (lista)
- [ ] **Desafíos Persistentes** (lista)
- [ ] **Aprendizajes Clave** (lista, si aplica)

---

### ✅ Paso 7: Verificar Recomendaciones (3 Tabs)

#### Tab 1: Para Estudiantes ✓

**Hacer clic en "Para Estudiantes"**

**Verificar que se muestran tarjetas con:**
- [ ] **Área** como título (ej. "Preparación")
- [ ] Lista de recomendaciones específicas

**Verificar al menos 2 áreas:**
- [ ] Preparación Técnica
- [ ] Gestión del Proceso Clínico
- [ ] (Puede haber más)

#### Tab 2: Para Docentes ✓

**Hacer clic en "Para Docentes"**

**Verificar que se muestran tarjetas con:**
- [ ] **Área** como título
- [ ] Lista de recomendaciones

**Verificar áreas esperadas:**
- [ ] Supervisión Clínica
- [ ] Pedagogía Clínica
- [ ] (Puede haber más)

#### Tab 3: Para la Institución ✓

**Hacer clic en "Para la Institución"**

**Verificar que se muestran tarjetas con:**
- [ ] **Área** como título
- [ ] Lista de recomendaciones

**Verificar áreas esperadas:**
- [ ] Infraestructura
- [ ] Recursos Materiales
- [ ] Estructura Académica
- [ ] (Puede haber más)

---

### ✅ Paso 8: Verificar Funcionalidad de Exportación

**Hacer clic en el botón "📥 Exportar Insights"**

**Verificar:**
- [ ] Se descarga un archivo JSON
- [ ] El nombre del archivo incluye la fecha: `integrador_vii_insights_2025-11-22.json`
- [ ] El archivo puede abrirse en un editor de texto
- [ ] El contenido es JSON válido (se ve estructurado con llaves y corchetes)

---

### ✅ Paso 9: Verificar Botón "Volver al Dashboard"

**Hacer clic en "← Volver al Dashboard"**

**Verificar:**
- [ ] Navega correctamente a `../index.html`
- [ ] El dashboard principal se carga correctamente

---

### ✅ Paso 10: Verificar Estilos y Diseño

**Aspecto visual general:**
- [ ] Los colores son coherentes (primario: azul/morado)
- [ ] Las tarjetas tienen sombras y bordes redondeados
- [ ] Los badges (Convergencia, Divergencia, Punto Crítico) son visibles y tienen colores apropiados:
  - Verde para Convergencia
  - Rojo para Divergencia
  - Naranja para Punto Crítico
- [ ] Los iconos de Font Awesome se muestran correctamente
- [ ] Las listas tienen bullets personalizados (▸)
- [ ] Hover effects funcionan en tarjetas y tabs

**Responsive:**
- [ ] Reducir ancho de ventana: el diseño se adapta correctamente
- [ ] Los tabs se ajustan en líneas múltiples si es necesario

---

## 🔍 ERRORES COMUNES Y SOLUCIONES

### Error: "InsightsLoader is not defined"

**Causa:** insights-loader.js no se cargó correctamente

**Solución:**
1. Verificar que `insights-loader.js` existe en la carpeta `dashboard`
2. Verificar la línea en insights.html: `<script src="../insights-loader.js"></script>`

### Error: "dataInsights is not defined"

**Causa:** data_insights.js no se cargó correctamente

**Solución:**
1. Verificar que `data_insights.js` existe en la carpeta `dashboard`
2. Verificar la línea en insights.html: `<script src="../data_insights.js"></script>`
3. Verificar que el archivo termina con la exportación correcta

### Error: Los datos muestran "undefined" o "NaN"

**Causa:** Estructura de datos incorrecta o falta de verificación null

**Solución:**
1. Abrir consola y escribir: `dataInsights.metadata` - debe mostrar objeto
2. Verificar que `dataInsights.crossDatasetInsights` existe
3. Verificar que cada área tiene las propiedades esperadas

### Error: Las tabs no cambian de contenido

**Causa:** Problema con dataset attributes o JavaScript de tabs

**Solución:**
1. Verificar en consola errores de JavaScript
2. Comprobar que cada tab tiene `data-tab`, `data-tab-critical`, o `data-tab-rec`
3. Comprobar que cada contenido tiene `data-content`, `data-content-critical`, o `data-content-rec`

---

## 📊 DATOS CLAVE A VERIFICAR

### Números Exactos Esperados

| Métrica | Valor Esperado |
|---------|----------------|
| Total Estudiantes | 14 |
| Total Co-Evaluadores | 2 |
| Total Docentes | 2 |
| Áreas de Análisis | 6 |
| Temas Clínicos | 5 |
| Patrones Identificados | 4 |
| Rating Rapport (Co-eval) | 4.5/5 |
| Rating Rapport (Docentes) | 4/5 |
| Rating Supervisión (Estudiantes) | 2.79/5 |
| Rating Co-presencia (Estudiantes) | 3.21/5 |

### Textos Clave a Buscar

**En Triangulación de Rapport:**
- ✅ "Todos coinciden en que el rapport se logró establecer"
- ⚠️ "Estudiantes se enfocan en técnicas no verbales"
- 🔴 "La ansiedad por la evaluación académica"

**En Triangulación de Pruebas:**
- ✅ "Necesidad de adaptar la batería original"
- ⚠️ "Estudiantes atribuyen cambios al 'diagnóstico/contexto'"
- 🔴 "El uso de pruebas complejas sin dominio técnico previo"

**En Triangulación de Supervisión:**
- ✅ "Tiempo y recursos insuficientes"
- ⚠️ "Estudiantes perciben 'falta de interés/apoyo'"
- 🔴 "Solo 50% considera que la supervisión ayudó al diagnóstico"

---

## ✅ CHECKLIST FINAL

**Al completar todas las verificaciones:**

- [ ] Todas las secciones cargan correctamente
- [ ] Todos los tabs funcionan
- [ ] Todos los datos se muestran (no hay "undefined")
- [ ] No hay errores en consola
- [ ] Los estilos se ven bien
- [ ] La navegación funciona
- [ ] La exportación funciona
- [ ] El diseño es responsive

**Si todos los checks están ✓:**
🎉 **LA PÁGINA DE INSIGHTS ESTÁ FUNCIONANDO CORRECTAMENTE**

**Si hay algún problema:**
1. Anotar el error específico
2. Verificar la sección de "Errores Comunes"
3. Si persiste, revisar los archivos mencionados en el error

---

## 📝 NOTAS ADICIONALES

### Archivos que Deben Existir

```
dashboard/
├── data_insights.js ✅
├── insights-loader.js ✅
├── analysis.js (puede existir)
├── styles.css ✅
└── views/
    └── insights.html ✅
```

### Orden de Carga de Scripts

1. `analysis.js` (opcional)
2. `data_insights.js` (CRÍTICO)
3. `insights-loader.js` (CRÍTICO)

### Navegación del Dashboard

- `index.html` → Dashboard principal
- `views/insights.html` → Página de insights (actual)
- Debe haber navegación bidireccional entre ambas

---

**Elaborado:** 2025-11-22  
**Para validación de:** data_insights.js v2.0  
**Estado esperado:** ✅ Todos los checks pasando
