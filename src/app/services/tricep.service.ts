/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TricepService {

  constructor() { }
  getTitle() {
    return { title: 'Ejercicios de Triceps', descripcion: 'Tareas y ejercicios para tus Triceps!', img: this.getTricepData()[0].img, url: 'menu/triceps' };

  }
  getTricepData() {


    return [
      {
        nombre: 'Extensión de tríceps acostado',
        descripcion: 'Este ejercicio activa la cabeza larga de los tríceps. Para hacerlo, debes estar acostado sobre un banco y, tomando un par de mancuernas o una barra EZ, debes subir los brazos y doblar los codos para subir y bajar las pesas, pasando por detrás de la cabeza y subir hasta estirarlos por completo.',
        img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/extension-triceps-con-mancuerna-una-mano-tumbado-1370.png',
      },
      {
        nombre: 'Pushdown de tríceps con cuerda de cable',
        descripcion: 'Este ejercicio con cable permite descansar un poco de las pesas y trabajar los músculos de forma diferente. Para hacerlo, agrega una cuerda a la polea alta de la estación de cable, toma el mango con un agarre por encima de la cabeza, manteniendo los brazos doblados y las manos separadas a la altura de los hombros. Lleva la parte superior de los brazos hacia los costados y empuja la barra hacia abajo hasta que los codos estén bloqueados.',
        descripcion2: 'descripcion',
        img: 'http://www.musculaciontotal.com/wp-content/uploads/2016/04/triceps-con-cables.jpg',
      },
      {
        nombre: 'Lagartijas diamante',
        descripcion: 'Las lagartijas ayudan a trabajar muchos músculos del cuerpo al mismo tiempo, pero con este tipo de agarre le das un buen desafío a los tríceps. El movimiento es normal, la diferencia es que las manos van juntas al centro del cuerpo, intentando hacer la forma de un diamante o rombo con los dedos.',
        img: 'https://fisiomorfosis.net/wp-content/uploads/2020/12/MUSCULOS-ENVOLVIDOS-FLEXAO-DIAMANTE.jpg',
      },
      {
        nombre: 'Contragolpes de tríceps',
        descripcion: 'Este ejercicio ayuda a trabajar todas las partes de los tríceps al mismo tiempo. Se les conoce también como patadas y se hacen tomando dos mancuernas, doblando las rodillas e inclinando la espalda un poco hacia adelante. Eleva los codos y realiza un movimiento de patada hacia atrás hasta que las mancuernas queden más altas que tu espalda.',
        img: 'https://media.gq.com.mx/photos/5f5ab5b5ef6115112e88c6dc/master/w_1600,c_limit/fondos%20triceps.jpg'
      }
    ];
  }
}



