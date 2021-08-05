export class Persona {
    IdPersona?: number;
    Documento: string;
    Nombres: string;
    Apellidos: string;
    Telefono: string;
    Correo: string;
    Direccion: string;

    constructor(
        IdPersona: number,
        Documento: string,
        Nombres: string,
        Apellidos: string,
        Telefono: string,
        Correo: string,
        Direccion: string,
    ){
        this.IdPersona = IdPersona;
        this.Documento = Documento;
        this.Nombres = Nombres;
        this.Apellidos = Apellidos;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Direccion = Direccion;
    }
}

 