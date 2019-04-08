"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const albumPelicula_1 = require("./albumPelicula");
const director_1 = require("./director");
const pelicula_1 = require("./pelicula");
const unAlbum = new albumPelicula_1.AlbumPelis;
let contadorID = 0;
const app = express_1.default();
const port = 8080;
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express_1.default.urlencoded());
app.get("/", (req, res) => {
    res.render("index", { lista: unAlbum.getLista() });
});
app.get("/MenuAlta", (req, res) => {
    res.render("altaPelis");
});
app.post("/altaPersonas", (req, res) => {
    const nombrePel = req.body.nombrePeli;
    const nombreDir = req.body.nombreDir;
    const apellido = req.body.apellidoDir;
    const dniDir = req.body.dniDir;
    const Director1 = new director_1.Director(nombreDir, apellido, dniDir);
    const unaPeli = new pelicula_1.Pelicula(contadorID, nombrePel, Director1);
    contadorID++;
    unAlbum.altaPelicula(unaPeli);
    res.redirect("/");
});
app.get("/eliminar", (req, res) => {
    const laPelicula = unAlbum.getPeliculaPorID(req.query.idPeli);
    unAlbum.bajaPelicula(laPelicula);
    res.redirect("/");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Servidor iniciado: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map