// Llamo la clase saludarA del Documento
const saludar = document.querySelector('.saludarA')

//* Creo la clase Persona
class Persona{
    nombre
    edad
    sexo
    //! Queria hacer desestructuración sin embargo no pude (Se arreglara más adelante)
    constructor({nombre="Carlos", edad=15, sexo="M"}){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }

    saludar(){
        let hola = `Hola, me llamo ${this.nombre} y me gusta comer `//? Cree esto de esta forma pues me dio pereza y se veia feo el poner esto directamente abajo
        document.querySelector('.bocadillo-cuadrado').innerHTML = hola 
    }
}
//* Creo nueva persona con caracteristicas por default
const persona1 = new Persona({nombre: 'Carlos', edad:18,sexo:"hombre"})

//! Esto no es necesario pero yo lo puse para dar utilidad a la constante saludar 
saludar.addEventListener('click', ()=>{
    persona1.saludar()
})