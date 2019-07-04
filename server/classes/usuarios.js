class Usuarios {
    constructor() {
        this.personas = []; // Son las personas conectadas al chat
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona); // Agrego la persona al arreglo
        return this.personas;
    }

    // Busca una persona en el arreglo
    getPersona(id) {
        let persona = this.personas.filter(persona => { // <- filter retorna un arreglo
            return persona.id === id; // <- condición de filtrado
        })[0]; // <- con 0 se retorna la primera posición
        return persona; // <- Si encuentra una persona regresa un objeto, de lo contrario un null o undefined
    }

    // Retorna todas la personas del arreglo
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasSala = this.personas.filter(persona => persona.sala === sala);
        return personasSala;
    }

    // Borra una persona del arreglo y retorna la persona borrada
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => {
            return persona.id !== id;
        });
        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}