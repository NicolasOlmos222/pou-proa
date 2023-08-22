//Clase Persona sin constructor
class Pou{
    nombre = "Tito";
    energia = 100;
    energiaMax = 100;

    getNombre() {
        return this.nombre;
    }
    getEnergia(){
        return this.energia;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
    setEnergia(energia){
        this.energia = energia;
        this.energiaMax = energia;
    }
    
    correr(energiaConsumida){
        if (this.energia >= energiaConsumida){
            this.energia -= energiaConsumida;
            return "Estoy corriendo";
        } else return "Estoy cansado jefe, no puedo correr";
    }

    dormir(energiaRecuperada){
        this.energia += energiaRecuperada;
        if (this.energia > this.energiaMax){    
            this.energia = this.energiaMax;
            return "Ya dormi mucho!"
        }
        return "Estoy durmiendo";
    }
}

//Inicio la clase

var pou = new Pou();

//Funciones
document.addEventListener("DOMContentLoaded", function() {
    // Aquí dentro puedes colocar la función que quieras ejecutar al iniciar la página
    refrescar();
});

function refrescar(){
    document.getElementById('nombre').textContent = pou.getNombre();
    document.getElementById('energia').textContent = pou.getEnergia();

    if (pou.getEnergia() > 80){
        document.getElementById('foto1').style.display = 'flex';
        document.getElementById('foto2').style.display = 'none';
        document.getElementById('foto3').style.display = 'none';
    }
    else if (pou.getEnergia() > 30){
        document.getElementById('foto1').style.display = 'none';
        document.getElementById('foto2').style.display = 'flex';
        document.getElementById('foto3').style.display = 'none';
    }
    else if (pou.getEnergia() > 0){
        document.getElementById('foto1').style.display = 'none';
        document.getElementById('foto2').style.display = 'none';
        document.getElementById('foto3').style.display = 'flex';
    }
}

function correr(){
    alert(pou.correr(25));
    refrescar();
}

function dormir(){
    alert(pou.dormir(30));
    refrescar();
}

function config(){
    alert("AQUI podremos cambiar el nombre, parametros como energia maxima, hambre, etc")
}