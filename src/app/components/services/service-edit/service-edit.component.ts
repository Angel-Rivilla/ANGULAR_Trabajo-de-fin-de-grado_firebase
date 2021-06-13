import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

  value;


  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;

   }

  ngOnInit(): void {
  }

}
