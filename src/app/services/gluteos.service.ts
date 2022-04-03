/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GluteosService {

  constructor() { }
  getTitle() {

    return { title: 'Ejercicios de gluteos', descripcion: 'Tareas y ejercicios para tus gluteos!', img: this.getGluteosData()[0].img };
  }
  getGluteosData() {


    return [
      {
        nombre: 'Sentadillas',
        descripcion: 'Las sentadillas, también conocidas como squats, es uno de los ejercicios físicos más famosos para los glúteos. Solo se debe poner los pies abiertos y alineados con la anchura de los hombros y con la punta hacia afuera. Con la espalda recta, se debe bajar lentamente con los glúteos hacia afuera, y flexionando la cadera y las rodillas a 90 grados para luego volver a la posición inicial.',
        img: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/6111b721953614cea20bcb60_photo-1566241134883-13eb2393a3cc.jpg',
      },
      {
        nombre: 'Peso muerto',
        descripcion: 'Deadlift, como se conoce en inglés, es uno de los ejercicios favoritos de los aficionados al levantamiento de peso y CrossFit. Para este ejercicio se debe utilizar algún instrumento de peso, generalmente se usa una barra o barbell, aunque al estar en casa podemos utilizar alguna otra herramienta como mancuernas o pesas rusas (kettlebell).',
        img: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/611400a927e575ca8f59f9a2_photo-1517963879433-6ad2b056d712.jpg',
      },
      {
        nombre: 'Puente de glúteo',
        descripcion: 'Es uno de los ejercicios de glúteos más populares porque es fácil de realizar en casa. Este ejercicio se realiza acostado boca arriba y con las piernas flexionadas, los pies cercanos a la cadera y las rodillas apuntando al techo. Una vez en esta posición, se debe levantar la pelvis poco a poco para que los glúteos se despeguen del suelo.',
        img: 'https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2021/04/variaciones-de-puente-de-gluteos01.jpg',
      },
      {
        nombre: 'Hip Thrust',
        descripcion: 'Para hacerlo, hay que comenzar sentados en el suelo con la espalda pegada al borde de un banco. Se deben levantar las caderas del suelo lentamente, generando extensión de caderas y los hombros deben ajustarse al banco. Los pies siempre estar separados, apoyados en el suelo.',
        img: 'https://www.iicefs.org/fileuploads/user/Imagen%202.[1].png'
      }
    ];
  }
}

