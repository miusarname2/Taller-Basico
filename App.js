// Llamo la clase saludarA del Documento
const bocadillo = document.querySelector('.container1')
const saludar = document.querySelector('.saludarA')
const dedicas = document.querySelector('.Q1')
const edadMay = document.querySelector('.Q2')
const calcArea = document.querySelector('.Q3')
const calcAreaC = document.querySelector('.Q4')
const calcAreaR = document.querySelector('.Q5')
const cambAmbient = document.querySelector('.A1')


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

class Vehiculo{
    constructor({marca="Mazda",modelo=12,velocidad=0}){
        this.marca=marca
        this.modelo=modelo
        this.velocidad=velocidad
    }
    acelerar(){
        this.velocidad += 10;   
        return this.velocidad   
    }
    
    static convertirKmHEnMph(velKm) {
        return velKm/1.60934
    }
}

class Empleado{


    constructor({nombre="James",edad=30,sueldo=15000}){
        this.nombre=nombre
        this.edad = edad
        this.sueldo=sueldo
    }
    calcularSalarioAnual() {
        return this.sueldo*12
    }
    static genId= 1;
    static generarIdEmpleado(){
        return Empleado.genId++
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

class Coche extends Vehiculo{
    constructor({marca="Mazda",modelo=12,velocidad=0,combustible=100}){
        super({marca,modelo,velocidad})
        this.combustible=combustible
    }
    acelerar(){
        this.velocidad += 10;
        this.combustible -= 10;
        return(this.velocidad +  `, carga de combustible ${this.combustible} L`)   
    }
}

class Gerente extends Empleado{
    constructor({nombre="Felipe",edad=42,sueldo=15000,departamento="Administración Telecomunicaciónes y tecnpologia"}) {
        super({nombre,edad,sueldo})
        this.departamento=departamento
    }
    calcularSalarioAnual(){
        let bono = (this.sueldo*10)/100
        return (this.sueldo+bono)*12
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


let vehiculo1 = new Vehiculo({marca:"Mazda",modelo:12,velocidad:0})

let coche1 = new Coche({marca:"Hyunday",modelo:2010,velocidad:0,combustible:200})

let empleado1 = new Empleado({nombre:"James",edad:30,sueldo:15000})

let gerente1 = new Gerente({nombre:"James",edad:42,sueldo:150000,departamento:"IT & marketing"})




//! Estos son los eventos y los cambios en el documento
 saludar.addEventListener('click', ()=>{
     bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
     const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML = estudiante1.saludar()
 })

 //* llama al metodo estudiar y lo "escribe" en el HTML
 dedicas.addEventListener('click',()=>{
    bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
     const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML = estudiante1.estudiar()
 })

 //* igual que el anterior pero con el metodo estatico esMayorDeEdad(estudiante1.edad) y con la diferencia de que utilizo un codicional para saber si es meyor o menor de edad 
 edadMay.addEventListener('click',()=>{
    bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
    const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML =Persona.esMayorDeEdad(estudiante1.edad) ? `La respuesta fue " ${Persona.esMayorDeEdad(estudiante1.edad)} " por tanto SI lo soy` :  `La respuesta fue " ${Persona.esMayorDeEdad(estudiante1.edad)} " por tanto NO lo soy`
 })

 //*Muy parecido al anterior pero con el metodo  calcularArea()
 calcArea.addEventListener('click',()=>{
    bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
    const el = document.querySelector('.bocadillo-cuadrado')
    el.innerHTML = figura1.calcularArea()
 });

  //*Muy parecido al anterior pero con el metodo circulo1.calcularArea()
 calcAreaC.addEventListener('click',()=>{
     bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
     const el = document.querySelector('.bocadillo-cuadrado')
     el.innerHTML = circulo1.calcularArea()
  });

  //*Muy parecido al anterior pero con el metodo rectangulo1.calcularArea()
  calcAreaR.addEventListener('click',()=>{
       bocadillo.innerHTML = `<div class="bocadillo-cuadrado"></div>`
       const el = document.querySelector('.bocadillo-cuadrado')
       el.innerHTML = rectangulo1.calcularArea()
    });

    //todo Esto es el inicio del codigo más dificil de entender/leer
    //*Creo el escuchardor que se activa cuando doy click en ir afuera y esto reescribe el HTML y nos da una nueva "imagen"/"Escena" 
    cambAmbient.addEventListener('click',()=>{
        const el= document.querySelector('.container')
        el.innerHTML=`<div class="background-image"><div class="app"><div class="container1"></div><img src="https://img.freepik.com/vector-premium/caricatura-hombre-joven-coche_7496-612.jpg" height="350px" alt="" class="image1"></div><h1>Estamos afuera... Vamos a dar un paseo </h1></div><div class="button-container"><button class="button acelerar" >ACELERAR GOD (No gastas combustible)</button><button class="button acelerarN" >ACELERAR Noob (gasta combustible)</button><button class="button conV" >Ver velocidad en Millas</button></div><button class="button2 A2">Regresar adentro</button><button class="button3 A3">Termina Paseo</button>`
        const act2= document.querySelector('.A2')
        const acelerarG = document.querySelector(".acelerar")
        const acelerarN = document.querySelector(".acelerarN")
        const convertir = document.querySelector(".conV")
        const endR = document.querySelector(".A3")
        act2.addEventListener('click',()=>{
            location.reload()
        });

        //* Escuchado para el boton acelerearGOD que e como ya se explica en el HTML sin gastar combustible
        acelerarG.addEventListener("click",()=>{
            document.querySelector(".container1").innerHTML=`<div class="bocadillo-cuadrado"></div>`
            const el = document.querySelector('.bocadillo-cuadrado')
            el.innerHTML = vehiculo1.acelerar()+ " Km/H"
        })

        //* En este evento en el cual se ejecuta el evento este si gasta combustible
        acelerarN.addEventListener("click",()=>{
            document.querySelector(".container1").innerHTML=`<div class="bocadillo-cuadrado"></div>`
            const el = document.querySelector('.bocadillo-cuadrado')
            el.innerHTML=coche1.acelerar()
        })

        //* Este tan solo hace la comversion por si eres un poco ... para no usr el SI(Sistema Internacional de Unidades** cof cof ** gringos ***cof cof**)
        convertir.addEventListener("click",()=>{
            document.querySelector(".container1").innerHTML=`<div class="bocadillo-cuadrado"></div>`
            const el = document.querySelector('.bocadillo-cuadrado')
            el.innerHTML=`La velocidad en millas es de ${Vehiculo.convertirKmHEnMph(coche1.velocidad)} <- Esto es gastando combustible`
        });

        //! Este es un evento dentro del evento tengo entendido que nos es muy buena practica que digamos por que el codigo empieza a ir hacia la derecha y se ve la "Anidación Hadouken" <- buscalo en google asi.. 
        //? Esto nuevamente reescribe elcodigo HTML par tener una nueva escena 
        endR.addEventListener("click",()=>{
            const el= document.querySelector('.container')
            el.innerHTML=`<div class="background-image"><div class="app"><div class="container1"></div><img src="https://thumbs.dreamstime.com/b/persona-adolescente-sonriendo-y-saludando-caricatura-156730534.jpg" height="350px" alt="" class="image1"></div><h1>¡Un Amigo ha Aparecido!</h1></div><div class="button-container"><button class="button salYear" >¿Cuanto ganas al años amigo?</button></div><button class="button2 A2">Regresar a Casa</button><button class="button4 A">Seguir....</button>`
            
            // Selectores de elementos HTML
            const salAnual= document.querySelector(".salYear")
            const act2= document.querySelector('.A2')
            const continues=document.querySelector(".A")

            //* Esto recarga la pagina y como es tan sutil el usuario comun no lo nota, se que no se debe hacer pero fue la solucion para no hacer una "Estructura" algo más complicada
            act2.addEventListener('click',()=>{
                location.reload()
            });

            //* Pues... llamado al metodo empleado1.calcularSalarioAnual() y "aparicion" del "bocadillo"
            salAnual.addEventListener("click",()=>{
                document.querySelector(".container1").innerHTML=`<div class="bocadillo-cuadrado"></div>`
                const el = document.querySelector('.bocadillo-cuadrado')
                el.innerHTML=`Yo gano ${empleado1.calcularSalarioAnual()} dolares anuales y tu compa?`
            });

            continues.addEventListener("click",()=>{
                const el= document.querySelector('.container')
                el.innerHTML=`<div class="background-image"><div class="app"><div class="container1"></div><img src="https://thumbs.dreamstime.com/b/personaje-de-caricatura-aislado-trabajador-oficina-hombre-con-traje-azul-c%C3%B3digo-vestimenta-empresario-y-corbata-elegantes-196331201.jpg" height="350px" alt="" class="image1"></div><h1>Parece que hemos encontrado al jefe de nuestro amigo(James)</h1></div><div class="button-container"><button class="button salYear" >¿Cuanto ganas al años amigo?</button></div><button class="button2 AN">¿ y que tiene de especial tu empresa?</button><button class="button2 A2">Regresar a Casa</button>`
                
                const salAnual=document.querySelector(".salYear")
                const ID=document.querySelector(".AN")
                const act2= document.querySelector('.A2')
                
                salAnual.addEventListener("click",()=>{
                    document.querySelector(".container1").innerHTML=`<div class="bocadillo-cuadrado"></div>`
                    const el = document.querySelector('.bocadillo-cuadrado')
                    el.innerHTML=`Yo gano ${gerente1.calcularSalarioAnual()} dolares anuales y uested    caballero?`
                });

                ID.addEventListener("click",()=>{
                    document.querySelector(".container1").innerHTML=`<div class="bocadillo-cuadrado"></div>`
                    const el = document.querySelector('.bocadillo-cuadrado')
                    console.log("El id es:",Empleado.generarIdEmpleado(gerente1))
                    el.innerHTML=`Pues de hecho si cada empleado tiene un id por ejemplo mi Id esta en la consola... `
                });
                
                
                act2.addEventListener('click',()=>{
                    location.reload()
                });
            });
            
        })
    });



