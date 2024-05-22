export class Animal {
    private id: number;
    private nombre: string;
    private raza: string;
    private static numero: number = 0;

    constructor(nombre: string, raza: string) { 
        this.id = Animal.numero;
        this.nombre = nombre;
        this.raza = raza;
        Animal.numero++;
    }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    getRaza() {
        return this.raza;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setRaza(raza: string) {
        this.raza = raza;
    }
}