import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tipoDataBindings';
  imgUrl = 'https://avatars.githubusercontent.com/u/102819880?v=4'

  constructor(){
    this.title = 'Curso de Angular Udemy';
  }

  chamarFuncao(){
    console.log('clicou');
  }

  // Existem quatro tipos de data Bindings
  
  // 1 - Interpolação = <h1>{{title}}</h1>

  // const imgUrl = 'https://avatars.githubusercontent.com/u/102819880?v=4'
  // 2 - Property bind = <img [src]="imgUrl">

  // 3 - Event binding = <button (click)="chamarFuncao()">
}
