export class Contacto {
    _id?: number;
    nombre: string;
    email: string;
    telefono1: string;
    telefono2: string;
    ciudad: string;
    direccion: string;
    categoria: string;

    constructor (nombre: string, email: string, telefono1: string, telefono2: string, ciudad: string, direccion: string, categoria: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono1 =telefono1;
        this.telefono2 = telefono2;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.categoria = categoria;
    }
}