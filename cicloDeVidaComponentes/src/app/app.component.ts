import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked{
  title = 'cicloDeVidaComponentes';

  constructor(){
    console.log('Componente construtor');
  }
  ngAfterViewChecked(): void {
    console.log('Componente AfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('Componente AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('componente AfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('Componente AfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('Componente OnDestroy');
  }

  ngDoCheck(): void {
    console.log('Componente DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente OnChages');
  }

  ngOnInit(): void {
    console.log('Componente OnInit');
  }

  mudarAoclique() {
    this.title += 'Z'
  }
}
