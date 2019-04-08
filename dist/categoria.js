"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Accion {
    constructor() {
        this.edadApta = 18;
    }
    getEdadApta() {
        return this.edadApta;
    }
    puedeVer(edad) {
        if (edad >= this.getEdadApta()) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Accion = Accion;
class Comedia {
    constructor() {
        this.edadApta = 8;
    }
    getEdadApta() {
        return this.edadApta;
    }
    puedeVer(edad) {
        if (edad >= this.getEdadApta()) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Comedia = Comedia;
class Romance {
    constructor() {
        this.edadApta = 18;
    }
    getEdadApta() {
        return this.edadApta;
    }
    puedeVer(edad) {
        if (edad >= this.getEdadApta()) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Romance = Romance;
class Aventura {
    constructor() {
        this.edadApta = 8;
    }
    getEdadApta() {
        return this.edadApta;
    }
    puedeVer(edad) {
        if (edad >= this.getEdadApta()) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Aventura = Aventura;
class Compuesto {
    agregarCategoria(unaCategoria) {
        for (const item of this.listaCategoria) {
            if (item == unaCategoria) {
                return false;
            }
        }
        this.listaCategoria.push(unaCategoria);
    }
    getEdadApta() {
        let mayor = 0;
        for (const item of this.listaCategoria) {
            if (item.getEdadApta() >= mayor) {
                mayor = item.getEdadApta();
            }
        }
        return mayor;
    }
    puedeVer(edad) {
        if (edad >= this.getEdadApta()) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Compuesto = Compuesto;
//# sourceMappingURL=categoria.js.map