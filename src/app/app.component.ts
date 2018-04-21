import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Lumen API';
  session: boolean = true;

  constructor() { }
  ngOnInit(): void {
    try {
      this.session = this.getSession();
    } catch (e){
      alert("Error en obtencion de sesion");
    }
  }

  getSession () {
    return this.session;
  }

  startSession(){
    this.session=true;
  }

  closeSession(){
    this.session=false;
  }
}
