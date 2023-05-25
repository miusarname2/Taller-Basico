// Llamo la clase saludarA del Documento
const bocadillo = document.querySelector('.container1')
const saludar = document.querySelector('.saludarA')
const dedicas = document.querySelector('.Q1')
const edadMay = document.querySelector('.Q2')
const calcArea = document.querySelector('.Q3')
const calcAreaC = document.querySelector('.Q4')
const calcAreaR = document.querySelector('.Q5')

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

class Figura{
    constructor({color="Negro",area=12}){
        this.color=color
        this.area=area
    }
    calcularArea(){
        return this.area
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

class Circulo extends Figura{
    constructor({color="Negro",area=12,radio=2}){
        super({color,area})
        this.radio=radio
    }
    calcularArea(){
        this.area =3.14*this.radio**2 
        return this.area
    }
}

class Rectangulo extends Figura{
    constructor({color="Negro",area=12,largo=10,ancho=10}){
        super({color,area})
        this.largo = largo
        this.ancho = ancho
    }
    calcularArea(){
        this.area =this.largo*this.ancho
        return this.area
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


let figura1 = new Figura({color:"Rojo",area:2})
figura1.calcularArea()



let circulo1 = new Circulo({color:"Azul",area:10,radio:5})


let rectangulo1 = new Rectangulo({color:"Negro",area:10,largo:10,ancho:15})








//! Estos son los eventos y los cambios en el documento
 saludar.addEventListener('click', ()=>{
     bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
     const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML = estudiante1.saludar()
 })

 dedicas.addEventListener('click',()=>{
    bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
     const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML = estudiante1.estudiar()
 })

 edadMay.addEventListener('click',()=>{
    bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
    const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML =Persona.esMayorDeEdad(estudiante1.edad) ? `La respuesta fue " ${Persona.esMayorDeEdad(estudiante1.edad)} " por tanto SI lo soy` :  `La respuesta fue " ${Persona.esMayorDeEdad(estudiante1.edad)} " por tanto NO lo soy`
 })

 calcArea.addEventListener('click',()=>{
    bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
    const el = document.querySelector('.bocadillo-cuadrado')
    el.innerHTML = figura1.calcularArea()
 });

 calcAreaC.addEventListener('click',()=>{
     bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
     const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML = circulo1.calcularArea()
  });

  calcAreaR.addEventListener('click',()=>{
       bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
       const el = document.querySelector('.bocadillo-cuadrado')
       el.innerHTML = rectangulo1.calcularArea()
    });





