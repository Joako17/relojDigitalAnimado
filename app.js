let fechaText = document.getElementById('fecha');
let tiempoText = document.getElementById('hora');

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let AMpm = 'AM';

let getTime = () => {
    let d = new Date();
    let dia = d.getDate();
    let año = d.getFullYear();
    let fecha = d.getDate();
    let mes = d.getMonth();
    let hora = d.getHours();
    let minutos = d.getMinutes();
    let segundos = d.getSeconds();

    if (hora > 12) {
        hora = hora - 12;
        AMpm = 'PM';
    }

    if(hora < 10) {
        hora = '0' + hora;
    }

    if(minutos < 10) {
        minutos = '0' + minutos;
    }   

    if(segundos < 10) {
        segundos = '0' + segundos;
    }

    fechaText.innerHTML = `${diasSemana[dia]}, ${meses[mes]}, ${fecha} , ${año}`;
    tiempoText.innerHTML = `${hora} : ${minutos} : ${segundos} ${AMpm}`
}

setInterval(getTime, 1000);