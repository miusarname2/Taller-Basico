// Llamo la clase saludarA del Documento

//todo Clases padres 
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
        console.log(`Hola, me llamo ${this.nombre} y me gusta comer `);
        return `Hola, me llamo ${this.nombre} y me gusta comer `//? Cree esto de esta forma pues me dio pereza y se veia feo el poner esto directamente abajo
    }

    //! Se creo el metodo para retornar un true o un false
    static esMayorDeEdad(edadPersona=this.edad){
        let val = edadPersona >= 18? true : false
        console.log(val);
        return val
    }
}

class Animal{
    constructor({nombre="Johanes",edad=2}){
        this.nombre=nombre
        this.edad=edad
    }
    hacerSonido(){
        console.log(`sonido del ${this.nombre}`);
        return `sonido del ${this.nombre}`
    }
}





//todo clases hijas
//* Crea Estudiante que se extiende de Persona es decir llamo a Estudiante o instacio a estudiante como clase "hija" de Persona para que herede sus atributos
class Estudiante extends Persona{
    constructor({ nombre = "Carlos", edad = 15, sexo = "M", carrera = "programación" }) {
        super({nombre,edad,sexo}) // <= Aca estoy llamando lo que quiero heredar de la clase padre
        this.carrera=carrera // <= Esto no es más que "creacion"/"instaciacion" de un nuevo atributo
    }

    //* metodo que retorna texto
    estudiar(){
        console.log(`Estoy estudiando ${this.carrera}`);
        return(`Estoy estudiando ${this.carrera}`);
    }
}

class Perro extends Animal{
    constructor({nombre="Dog",edad=1,raza="Pitbull"}){
        super({nombre,edad})
        this.raza=raza
    }
    moverCola(){
        console.log(`el perro ${this.nombre} está moviendo la cola.`);
    }

}


//todo Instacias de clases...

let estudiante1= new Estudiante({nombre: 'Carlos', edad:18,sexo:"hombre",carrera:"Ing Electrica"})
estudiante1.estudiar()



//* Creo nueva persona con caracteristicas por default
const persona1 = new Persona({nombre: 'Carlos', edad:18,sexo:"hombre"})
persona1.saludar()
Persona.esMayorDeEdad(estudiante1.edad) ;



let animal1=new Animal({nombre:"Lobo",edad:5})
animal1.hacerSonido()



let perro1=new Perro({nombre:"Juan",edad:10,raza:"lobo"})
perro1.hacerSonido()
perro1.moverCola()







//! Estos son los eventos y los cambios en el documento
// saludar.addEventListener('click', ()=>{
//     bocadillo.innerHTML = persona1.saludar()
// })

// dedicas.addEventListener('click',()=>{
//     bocadillo.innerHTML = estudiante1.estudiar()
// })

// edadMay.addEventListener('click',()=>{
//     bocadillo.innerHTML = Persona.esMayorDeEdad(estudiante1.edad) ? `La respuesta fue " ${Persona.esMayorDeEdad(estudiante1.edad)} " por tanto SI lo soy` :  `La respuesta fue " ${Persona.esMayorDeEdad(estudiante1.edad)} " por tanto NO lo soy`
// })






