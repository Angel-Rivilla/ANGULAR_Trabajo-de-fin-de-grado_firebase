import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img = [...Array(20).keys()];
  opened = false;
  constructor() {
   }

  ngOnInit(): void {
  }

}
