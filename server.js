const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('../frontend'));
app.use(fileUpload());

// رفع الملفات
app.post('/upload', (req, res) => {
    if (!req.files || !req.files.file) return res.status(400).send('لا يوجد ملف.');
    const file = req.files.file;
    const uploadPath = path.join(__dirname, '../uploads', file.name);
    file.mv(uploadPath, err => {
        if (err) return res.status(500).send(err);
        res.send('تم الرفع!');
    });
});

// عرض الملفات
app.get('/files', (req, res) => {
    fs.readdir(path.join(__dirname, '../uploads'), (err, files) => {
        if (err) return res.status(500).send(err);
        res.json(files);
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));