"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Director {
    constructor(nombre, apellido, DNI) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getDNI() {
        return this.DNI;
    }
}
exports.Director = Director;
//# sourceMappingURL=director.js.map