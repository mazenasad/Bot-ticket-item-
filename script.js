const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const filesList = document.getElementById('filesList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    if (res.ok) {
        alert('تم رفع الملف بنجاح!');
        loadFiles();
    } else {
        alert('فشل رفع الملف.');
    }
});

async function loadFiles() {
    const res = await fetch('/files');
    const files = await res.json();
    filesList.innerHTML = files.map(f => `<p>${f}</p>`).join('');
}

loadFiles();