import { ICategoria } from "./categoria";
import { Director } from "./director";
import { Pelicula } from "./pelicula";

export class AlbumPelis {
    public listaPeliculas: Pelicula[];
    public contadorId: number;
    constructor() {
        this.listaPeliculas = [];

    }

    public getLista() {
        return this.listaPeliculas;
    }

    public getPeliculaPorID(id: number) {
        for (const item of this.getLista()) {
            if (item.getId() == id) {
                return item;
            }
        }
    }

    public altaPelicula(unaPeli: Pelicula) {
        for (const item of this.listaPeliculas) {
            if (item == unaPeli) {
                return false;
            }
        }
        this.listaPeliculas.push(unaPeli);
    }
    public bajaPelicula(unaPeli: Pelicula) {
        for (const item of this.listaPeliculas) {
            if (item == unaPeli) {
                const posicion: number = this.listaPeliculas.indexOf(item);
                this.listaPeliculas.splice(posicion, 1);
            }
        }
    }
}
