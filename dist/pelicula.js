"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pelicula {
    constructor(id, nombre, Director) {
        this.idPelicula = id;
        this.nombre = nombre;
        this.Director = Director;
    }
    getCategorias() {
        return this.Categoria;
    }
    getId() {
        return this.idPelicula;
    }
    getNombrePelicula() {
        return this.nombre;
    }
    getDirector() {
        return this.Director;
    }
    CambiarNomb(nombre) {
        this.nombre = nombre;
    }
}
exports.Pelicula = Pelicula;
//# sourceMappingURL=pelicula.js.map