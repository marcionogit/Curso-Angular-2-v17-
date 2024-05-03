import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Diretivas Estruturais';

  lista = [{nome:'Márcio', sexo:'Masculino', idade:'26 Anos'},
           {nome:'Alexandre', sexo:'Masculino', idade:'12 Anos'}, 
           {nome:'Roberta', sexo:'Feminino', idade:'34 Anos'}];
  constructor(){

  }
}
