import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img = [...Array(18).keys()];
  opened = false;
  colorVerde = false;
  colorWhite = false;
  fontInc = false;
  fontDec = false;
  botonMenuColor = 0;

  
  constructor(public modal: NgbModal){}
  
  verde(){
    if(this.colorVerde == false){
      this.colorVerde = true;
    }
    else{
      this.colorVerde = false;
    }
  }

  white(){
    if(this.colorWhite == false){
      this.colorWhite = true;
    }
    else{
      this.colorWhite = false;
    }
  }

  aumentarFont(){
    if(this.fontInc == false){
      this.fontInc = true;
    }
    else{
      this.fontInc = false;
    }
  }

  aumentarDesc(){
    if(this.fontDec == false){
      this.fontDec = true;
    }
    else{
      this.fontDec = false;
    }
  }

  botonMenuColorf(){
    if(this.botonMenuColor == 0){
      this.botonMenuColor = 1;
    }
    else{
      this.botonMenuColor = 0;
    }
  }

  openLG(contenido: any){
    this.modal.open(contenido, {size:'lg'});
  }



}
