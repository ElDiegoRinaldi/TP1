export class Director {
    private nombre: string;
    private apellido: string;
    private DNI: number;

    constructor(nombre: string, apellido: string, DNI: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getDNI(): number {
        return this.DNI;
    }

}
