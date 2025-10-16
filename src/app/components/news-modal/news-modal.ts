import { Component } from '@angular/core';

@Component({
  selector: 'app-news-modal',
  imports: [],
  templateUrl: './news-modal.html',
  styleUrl: './news-modal.css'
})

/* 
  Componente del Modal de Noticia creado por Fran en la antigua página
*/
export class NewsModal {
  //ATRIBUTOS
  isVisible: boolean = false;

  //MÉTODOS
  //Muestra el modal
  showModal(){}

  //Esconde el modal
  closeModal(){}

}
