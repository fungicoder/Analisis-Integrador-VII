document.addEventListener('DOMContentLoaded', async () => {
    // Initialize with default dataset (FE)
    const rawDatasets = {
        'FE': typeof dataFE !== 'undefined' ? dataFE : '',
        'FC': typeof dataFC !== 'undefined' ? dataFC : '',
        'FD': typeof dataFD !== 'undefined' ? dataFD : ''
    };

    // Dataset Selector Logic
    const selector = document.getElementById('dataset-selector');
    if (selector) {
        // Load saved selection
        const savedKey = localStorage.getItem('selectedDataset') || 'FE';
        selector.value = savedKey;

        selector.addEventListener('change', async (e) => {
            const selectedKey = e.target.value;
            localStorage.setItem('selectedDataset', selectedKey);

            const data = rawDatasets[selectedKey];
            if (data) {
                await Analysis.init(data);
                renderDashboard();
                // Update status
                const statusDot = document.querySelector('.status-badge');
                if (statusDot) statusDot.innerHTML = `<span class="dot"></span> Datos Cargados (${selectedKey})`;
            }
        });
    }

    // Initial Load
    const initialKey = localStorage.getItem('selectedDataset') || 'FE';
    if (rawDatasets[initialKey]) {
        await Analysis.init(rawDatasets[initialKey]);
        renderDashboard();

        // Update status initially
        const statusDot = document.querySelector('.status-badge');
        if (statusDot) statusDot.innerHTML = `<span class="dot"></span> Datos Cargados (${initialKey})`;
    } else {
        console.error('Dataset not found:', initialKey);
    }

    setupInteractions();
});

function renderDashboard() {
    const stats = Analysis.getGlobalStats();

    // Render Stats
    const totalParticipants = document.getElementById('total-participants');
    if (totalParticipants) totalParticipants.textContent = stats.participants;

    const wordsAnalyzed = document.getElementById('words-analyzed');
    if (wordsAnalyzed) wordsAnalyzed.textContent = stats.totalWords.toLocaleString();

    const positivityIndex = document.getElementById('positivity-index');
    if (positivityIndex) positivityIndex.textContent = `${stats.positivityIndex}%`;

    const criticalThemes = document.getElementById('critical-themes');
    if (criticalThemes) criticalThemes.textContent = stats.criticalThemes;

    renderMatrix();
    renderSidebar();
    renderDistribution();
}

function renderMatrix() {
    const headerRow = document.getElementById('matrix-header');
    const matrixBody = document.getElementById('matrix-body');

    if (!headerRow || !matrixBody) return;

    const students = Analysis.students;
    const questions = Analysis.questions;

    // Header
    headerRow.innerHTML = '';
    students.forEach(s => {
        const th = document.createElement('div');
        th.className = 'matrix-col-header';
        // Remove suffix (fe, fc, fd) for cleaner display
        th.textContent = s.replace(/fe|fc|fd/i, '');
        headerRow.appendChild(th);
    });

    // Body
    matrixBody.innerHTML = '';
    questions.forEach(q => {
        const row = document.createElement('div');
        row.className = 'matrix-row';

        const label = document.createElement('div');
        label.className = 'matrix-row-label';
        label.textContent = q.code;
        label.title = q.text;
        row.appendChild(label);

        students.forEach(s => {
            const result = Analysis.results.find(r => r.questionCode === q.code && r.studentId === s);
            const cell = document.createElement('div');
            cell.className = `matrix-cell ${result ? result.sentiment : 'neu'}`;
            cell.title = `${s}: ${result ? (result.text.substring(0, 50) + '...') : 'Sin respuesta'}`;

            cell.addEventListener('click', () => openModal(q, s, result));

            row.appendChild(cell);
        });

        matrixBody.appendChild(row);
    });
}

function renderSidebar() {
    const list = document.getElementById('question-list');
    if (!list) return;

    list.innerHTML = '';

    Analysis.questions.forEach(q => {
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerHTML = `
            <span class="q-code">${q.code}</span>
            <span class="q-text">${q.text}</span>
        `;
        item.addEventListener('click', () => {
            document.querySelectorAll('.question-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            openQuestionSummaryModal(q);
        });
        list.appendChild(item);
    });
}

function renderDistribution() {
    const counts = { pos: 0, neu: 0, neg: 0 };
    Analysis.results.forEach(r => counts[r.sentiment]++);

    const total = Analysis.results.length;
    const chart = document.getElementById('sentiment-chart');

    if (chart) {
        const data = [
            { label: 'Positivo', key: 'pos', color: 'var(--success-color)' },
            { label: 'Neutral', key: 'neu', color: 'var(--neutral-color)' },
            { label: 'Negativo', key: 'neg', color: 'var(--danger-color)' }
        ];

        chart.innerHTML = data.map(d => {
            const pct = total > 0 ? Math.round((counts[d.key] / total) * 100) : 0;
            return `
                <div class="bar-item">
                    <span class="bar-label">${d.label}</span>
                    <div class="bar-track">
                        <div class="bar-fill ${d.key}" style="width: ${pct}%"></div>
                    </div>
                    <span class="bar-value">${pct}%</span>
                </div>
            `;
        }).join('');
    }

    // Top Keywords
    const keywordsDiv = document.getElementById('top-keywords');
    if (keywordsDiv) {
        const words = Analysis.getWordCloudData().slice(0, 10);
        let keywordsHTML = '<h4>Palabras Clave Frecuentes</h4>';
        words.forEach(w => {
            keywordsHTML += `<span class="keyword-tag">${w.text} (${w.value})</span>`;
        });
        keywordsDiv.innerHTML = keywordsHTML;
    }
}

function setupInteractions() {
    // Search Questions
    const questionSearch = document.getElementById('question-search');
    if (questionSearch) {
        questionSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.question-item').forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(term) ? 'block' : 'none';
            });
        });
    }

    // Global Search
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
        globalSearch.addEventListener('input', (e) => {
            // Placeholder for global search logic
        });
    }

    // Modal Close
    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            document.getElementById('detail-modal').classList.remove('active');
        });
    }

    const detailModal = document.getElementById('detail-modal');
    if (detailModal) {
        detailModal.addEventListener('click', (e) => {
            if (e.target.id === 'detail-modal') {
                detailModal.classList.remove('active');
            }
        });
    }
}

function openModal(question, studentId, result) {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (modalTitle) modalTitle.textContent = 'Detalle de Respuesta Individual';

    if (modalBody) {
        modalBody.innerHTML = `
            <div class="question-detail">
                <span class="label">PREGUNTA</span>
                <p>${question.code}: ${question.text}</p>
            </div>
            <div class="response-detail">
                <span class="label">RESPUESTA (<span class="highlight">${studentId}</span>)</span>
                <div class="response-box">
                    ${result ? result.text : "Sin respuesta"}
                </div>
            </div>
            <div class="sentiment-detail">
                <span class="label">ANÁLISIS DE SENTIMIENTO</span>
                <div class="sentiment-badge ${result ? result.sentiment : 'neu'}">
                    ${result ? (result.sentiment === 'pos' ? 'POSITIVO' : result.sentiment === 'neg' ? 'NEGATIVO' : 'NEUTRAL') : 'SIN DATOS'}
                </div>
            </div>
        `;
    }

    const detailModal = document.getElementById('detail-modal');
    if (detailModal) detailModal.classList.add('active');
}

function openQuestionSummaryModal(question) {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (modalTitle) modalTitle.textContent = `Resumen: ${question.code} `;

    // Get data for this question
    const responses = Analysis.results.filter(r => r.questionCode === question.code);
    const total = responses.length;
    const pos = responses.filter(r => r.sentiment === 'pos').length;
    const neg = responses.filter(r => r.sentiment === 'neg').length;
    const neu = responses.filter(r => r.sentiment === 'neu').length;

    // Calculate percentages
    const posPct = total ? Math.round((pos / total) * 100) : 0;
    const negPct = total ? Math.round((neg / total) * 100) : 0;
    const neuPct = total ? Math.round((neu / total) * 100) : 0;

    if (modalBody) {
        modalBody.innerHTML = `
            <div class="summary-header">
                <h4>${question.text}</h4>
                <div class="summary-stats">
                    <div class="stat-item">
                        <span class="stat-val">${total}</span>
                        <span class="stat-label">Respuestas</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-val success">${posPct}%</span>
                        <span class="stat-label">Positivo</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-val danger">${negPct}%</span>
                        <span class="stat-label">Negativo</span>
                    </div>
                </div>
            </div>

            <div class="responses-list-container">
                <h5>Respuestas por Participante</h5>
                <div class="responses-list">
                    ${responses.length > 0 ? responses.map(r => `
                        <div class="response-item">
                            <div class="response-meta">
                                <span class="student-tag">${r.studentId}</span>
                                <span class="sentiment-dot ${r.sentiment}"></span>
                            </div>
                            <p class="response-text">"${r.text}"</p>
                        </div>
                    `).join('') : '<p class="text-secondary">No hay respuestas registradas.</p>'}
                </div>
            </div>
        `;
    }

    const detailModal = document.getElementById('detail-modal');
    if (detailModal) detailModal.classList.add('active');
}
