// Llamo la clase saludarA del Documento
const bocadillo = document.querySelector('.bocadillo-cuadrado')
const saludar = document.querySelector('.saludarA')
const dedicas = document.querySelector('.Q1')

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
        return `Hola, me llamo ${this.nombre} y me gusta comer `//? Cree esto de esta forma pues me dio pereza y se veia feo el poner esto directamente abajo
    }
}

//* Creo nueva persona con caracteristicas por default
const persona1 = new Persona({nombre: 'Carlos', edad:18,sexo:"hombre"})

//* Crea Estudiante que se extiende de Persona es decir llamo a Estudiante o instacio a estudiante como clase "hija" de Persona para que herede sus atributos
class Estudiante extends Persona{
    constructor({ nombre = "Carlos", edad = 15, sexo = "M", carrera = "programación" }) {
        super({nombre,edad,sexo}) // <= Aca estoy llamando lo que quiero heredar de la clase padre
        this.carrera=carrera // <= Esto no es más que "creacion"/"instaciacion" de un nuevo atributo
    }

    //* metodo que retorna texto
    estudiar(){
        return(`Estoy estudiando ${this.carrera}`);
    }
}

let estudiante1= new Estudiante({nombre:"Oscar M Alvarez Gómez",edad:18,sexo:"M",carrera:"Ing Electrica"})

//console.log(Estudiante1.estudiar());


//! Estos son los eventos y los cambios en el documento
saludar.addEventListener('click', ()=>{
    bocadillo.innerHTML = persona1.saludar()
})

dedicas.addEventListener('click',()=>{
    bocadillo.innerHTML = estudiante1.estudiar()
})