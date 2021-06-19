import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public modal: NgbModal, private http: HttpClient) { }

  ngOnInit(): void {
  }

  openSM(contenido: any){
    this.modal.open(contenido, {size:'sm'});
  }
  openLG(contenido: any){
    this.modal.open(contenido, {size:'lg'});
  }
  openXL(contenido: any){
    this.modal.open(contenido, {size:'xl'});
  }
  openCentrado(contenido: any){
    this.modal.open(contenido, {centered: true});
  }
  openScroll(contenido: any){
    this.modal.open(contenido, {size: 'lg', scrollable: true, centered: true});
  }
  openBackground(contenido: any){
    this.modal.open(contenido, {backdropClass:'blue'});
  }
  openWindow(contenido: any){
    this.modal.open(contenido, {windowClass: 'oscuro'});
  }
  
  onSubmit(f: NgForm) {
    const url = 'http://localhost:4200/services';
    this.http.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modal.dismissAll(); //dismiss the modal
  }


}
