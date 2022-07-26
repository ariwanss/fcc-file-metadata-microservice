const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'public/uploads'});
const path = require('node:path');
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.post('/api/upload', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));