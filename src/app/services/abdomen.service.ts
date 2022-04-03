/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbdomenService {
  descripcionAbdomen = 'Con el ejercicio denominado "el puente" desarrollarás los músculos abdominales inferiores y también la estabilidad general del cuerpo.  Aguanta en esta postura durante 30 segundos y descansa otros 15 segundos entre serie y serie.';

  constructor() { }

  getTitle(){
    return {title: 'Ejercicios de Abdomen'};
  }

  getAbdomen() {
    return [
      {
        nombre: 'Puente',
        descripcion: this.descripcionAbdomen,
        img: 'https://www.mundofitness.com/wp-content/uploads/gluteo6.jpg',
      },
      {
        nombre: 'Plancha Abdominal',
        descripcion: 'La plancha abdominal es uno de los ejercicios más efectivos para quemar esta grasa y conseguir un vientre plano, además es muy completo porque se trabajan casi todos los grupos musculares: zona del abdomen, lumbar, los glúteos y las piernas. Coloca el cuerpo en posición horizontal respecto al suelo y apoya el peso en los antebrazos y en la punta de los pies. Este ejercicio te ayuda a mejorar la resistencia física, el equilibrio, la fuerza y la concentración. Márcate como objetivo final realizar cinco series de 30 segundos con un descanso entre medias de 30 segundos.',
        img: 'https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2020/11/Planchascomparativas.jpg',
      },
      {
        nombre: 'Sentadillas',
        descripcion: 'Las sentadillas se han convertido en uno de los ejercicios básicos en cualquier rutina, ya que ayudan a adelgazar, a estimular el sistema cardiovascular y a definir los glúteos y piernas. Además de perder peso y volumen, también notarás una mejoría en tu flexibilidad, equilibrio y fuerza.',
        img: 'https://www.runtastic.com/blog/wp-content/uploads/2018/07/Co%CC%81mo-hacer-sentadillas-1200x800.jpg',
      },
      {
        nombre: 'burpees',
        descripcion: 'Los burpees son uno de los ejercicios más completos, donde se trabajan diferentes aspectos del cuerpo como la resistencia cardiovascular, la fuerza, el equilibrio y la coordinación. En esta parte del entrenamiento estarán involucrados muchos músculos del cuerpo. ¡Es bastante exigente, pero ideal si quieres un vientre plano!',
        img: 'https://www.ejerciciosparaadelgazar.website/wp-content/uploads/2020/07/burpees-musculos.jpg',
      }
    ];
  }
}
