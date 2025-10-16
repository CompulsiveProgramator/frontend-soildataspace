import { Component } from '@angular/core';

@Component({
  selector: 'app-news-form',
  imports: [],
  templateUrl: './news-form.html',
  styleUrl: './news-form.css'
})

/* 
  Componente del Modal del formulario de noticias creado por Jorge en la antigua página
*/
export class NewsForm {
  //ATRIBUTOS
  isVisible : boolean = false; //Define si se puede ver el formulario o no

  //METODOS
  //Muestra el modal
  showModal(){}

  //Esconde el modal
  closeModal(){}

  //Cuando se sube, se gestiona la llamada API mediante un servicio
  onSubmit(){}
}
