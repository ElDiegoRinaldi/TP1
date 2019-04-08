import express from "express";
import path from "path";
import { AlbumPelis } from "./albumPelicula";
import {ICategoria} from "./categoria";
import { Director } from "./director";
import {Pelicula} from "./pelicula";

const unAlbum: AlbumPelis = new AlbumPelis;
let contadorID: number = 0;

const app = express();
const port = 8080;

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use(express.urlencoded());

app.get( "/", ( req, res ) => {
    res.render( "index", {lista : unAlbum.getLista()});
} );

app.get("/MenuAlta", (req, res) => {
    res.render("altaPelis");
});

app.post("/altaPersonas", (req, res) => {
    const nombrePel: string = req.body.nombrePeli;
    const nombreDir: string = req.body.nombreDir;
    const apellido: string = req.body.apellidoDir;
    const dniDir: number = req.body.dniDir;

    const Director1: Director = new Director(nombreDir, apellido, dniDir);
    const unaPeli: Pelicula = new Pelicula(contadorID, nombrePel, Director1);
    contadorID ++;

    unAlbum.altaPelicula(unaPeli);
    res.redirect("/");

});

app.get("/eliminar", (req, res) => {
    const laPelicula = unAlbum.getPeliculaPorID(req.query.idPeli);

    unAlbum.bajaPelicula(laPelicula);

    res.redirect("/");
});

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Servidor iniciado: http://localhost:${ port }` );
} );
