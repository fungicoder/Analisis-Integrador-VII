async function initViewData() {
    const rawDatasets = {
        'FE': typeof dataFE !== 'undefined' ? dataFE : '',
        'FC': typeof dataFC !== 'undefined' ? dataFC : '',
        'FD': typeof dataFD !== 'undefined' ? dataFD : ''
    };
    const key = localStorage.getItem('selectedDataset') || 'FE';

    // Update title or UI to show selected dataset
    const header = document.querySelector('.top-bar h2');
    if (header) {
        const datasetNames = { 'FE': 'Estudiantes', 'FC': 'Co-Evaluadores', 'FD': 'Docentes' };
        header.innerHTML += ` <span style="font-size: 0.6em; opacity: 0.7; margin-left: 10px; background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 12px; vertical-align: middle;">${datasetNames[key] || key}</span>`;
    }

    if (rawDatasets[key]) {
        await Analysis.init(rawDatasets[key]);
        return key;
    } else {
        console.error('Dataset not found');
        return null;
    }
}
