export interface ICategoria {
    getEdadApta(): number;
    puedeVer(edad: number): boolean;
}

export class Accion implements ICategoria {
    public edadApta = 18;
    public getEdadApta(): number {
        return this.edadApta;
    }
    public puedeVer(edad: number): boolean {
        if (edad >= this.getEdadApta()) {
            return true;
        } else {
            return false;
        }
    }
}

export class Comedia implements ICategoria {
    public edadApta = 8;
    public getEdadApta(): number {
        return this.edadApta;
    }
    public puedeVer(edad: number): boolean {
        if (edad >= this.getEdadApta()) {
            return true;
        } else {
            return false;
        }
    }
}

export class Romance implements ICategoria {
    public edadApta = 18;
    public getEdadApta(): number {
        return this.edadApta;
    }
    public puedeVer(edad: number): boolean {
        if (edad >= this.getEdadApta()) {
            return true;
        } else {
            return false;
        }
    }
}

export class Aventura implements ICategoria {
    public edadApta = 8;
    public getEdadApta(): number {
        return this.edadApta;
    }
    public puedeVer(edad: number): boolean {
        if (edad >= this.getEdadApta()) {
            return true;
        } else {
            return false;
        }
    }
}

export class Compuesto implements ICategoria {
    public listaCategoria: ICategoria[];

    public agregarCategoria(unaCategoria: ICategoria) {
        for (const item of this.listaCategoria) {
            if (item == unaCategoria) {
                return false;
            }
        }
        this.listaCategoria.push(unaCategoria);
    }

    public getEdadApta(): number {
        let mayor: number = 0;
        for (const item of this.listaCategoria) {
            if (item.getEdadApta() >= mayor) {
                mayor = item.getEdadApta();
            }
        }
        return mayor;
    }
    public puedeVer(edad: number): boolean {
        if (edad >= this.getEdadApta()) {
            return true;
        } else {
            return false;
        }
    }
}
