// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;
// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// ============================
//  BD
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/App_tareas';
} else {
    urlDB = 'mongodb+srv://root:ZGfnkjgYA0XhfYHW@cluster0-hxmfr.mongodb.net/AppTareas';
}

process.env.URL_DB = urlDB;