<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>استضافة بوتات</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>رفع بوتات Python و JavaScript</h1>
    <form id="uploadForm" enctype="multipart/form-data">
        <input type="file" name="file" id="fileInput" accept=".py,.js" required>
        <button type="submit">رفع الملف</button>
    </form>
    <div id="filesList"></div>

    <script src="script.js"></script>
</body>
</html>