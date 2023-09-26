// подключение express
const express = require("express");
const path = require('path');
// создаем объект приложения
const app = express();

// Настройка обработки статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(request, response){

    // отправляем ответ
    response.send("<h2>Привет server.js!</h2>");
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/abzal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'abzal.html'));
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () =>{
    console.log(__dirname + " путь к файлу");
});