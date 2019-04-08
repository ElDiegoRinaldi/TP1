import {Accion, Aventura, Comedia, Compuesto, ICategoria, Romance} from "./categoria";
import {Director} from "./director";

export class Pelicula {
    private idPelicula: number;
    private nombre: string;
    private Director: Director;
    private Categoria: ICategoria;

    constructor(id: number, nombre: string, Director: Director) {
        this.idPelicula = id;
        this.nombre = nombre;
        this.Director = Director;
    }

    public getCategorias() {
        return this.Categoria;
    }
    public getId() {
        return this.idPelicula;
    }

    public getNombrePelicula(): string {
        return this.nombre;
    }
    public getDirector(): Director {
        return this.Director;
    }
    public CambiarNomb(nombre: string) {
        this.nombre = nombre;
    }
}
