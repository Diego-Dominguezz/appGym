/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BicepService {

  constructor() { }
  getTitle(){
    return { title: 'Ejercicios de biceps', descripcion: 'Tareas y ejercicios para tus biceps!', img: this.getBicepData()[0].img, url: 'menu/bicep', icon: 'biceps' };
  }

  getBicepData() {
    return [
      {
        nombre: 'Curl con barra',
        descripcion: 'Es uno de los ejercicios de bíceps más tradicionales porque agranda su tamaño y aumenta su fuerza. También es un ejercicio simple de hacer. Para realizarlo, se necesita una barra recta con agarre debajo de la mano. Este debe ser más ancho que los hombros.Luego de tenerlo y con el pecho hacia arriba, se deben poner los codos hacia abajo de la articulación del hombro y enrollar la barra hacia arriba con los bíceps, sin que el torso se incline hacia adelante.',
        img: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/6111b40a786e69c1e0ca5eb7_photo-1574680088814-c9e8a10d8a4d.jpg'
      },
      {
        nombre: 'Chin-ups',
        descripcion: 'Este ejercicio ayuda a aumentar la fuerza de la parte superior del cuerpo para los entrenamientos generales de la persona.',
        descripcion2: 'Para hacerlo se necesita colgar la barra con las muñecas en posición supina. Es decir, con las palmas hacia arriba. Hay que separar las manos al ancho de los hombros y con el peso muerto se debe retraer hacia el cuerpo, mientras que se presiona la escápula para que la espalda esté estable. No dejes que el cuerpo se doble hacia adentro para hacerlo correctamente.',
        img: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/6111b4e5bbdcb46ca90b2154_photo-1520334435999-d992362bb3ad.jpg'
      },
      {
        nombre: 'Dominadas supinas',
        descripcion: 'Para este ejercicio solo necesitas una barra horizontal y tu peso corporal. Para llevarlo a cabo, se agarra la barra horizontal al frente de nosotros y la llevamos hacia el cuerpo. Es decir, la barbilla debe alcanzar la altura de la barra y bajarla hacia su posición inicial.',
        img: 'https://uploads-ssl.webflow.com/609aa41bb752e648eb4cb693/6111b6b544adf40cf5101983_photo-1526506118085-60ce8714f8c5.jpg'
      }
    ];
  }
}

