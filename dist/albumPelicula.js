"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AlbumPelis {
    constructor() {
        this.listaPeliculas = [];
    }
    getLista() {
        return this.listaPeliculas;
    }
    getPeliculaPorID(id) {
        for (const item of this.getLista()) {
            if (item.getId() == id) {
                return item;
            }
        }
    }
    altaPelicula(unaPeli) {
        for (const item of this.listaPeliculas) {
            if (item == unaPeli) {
                return false;
            }
        }
        this.listaPeliculas.push(unaPeli);
    }
    bajaPelicula(unaPeli) {
        for (const item of this.listaPeliculas) {
            if (item == unaPeli) {
                const posicion = this.listaPeliculas.indexOf(item);
                this.listaPeliculas.splice(posicion, 1);
            }
        }
    }
}
exports.AlbumPelis = AlbumPelis;
//# sourceMappingURL=albumPelicula.js.map