import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img = [...Array(18).keys()];
  shownav = true;
  x= fromEvent(document, 'scroll');
  otherScroll = window.pageYOffset;

  constructor() {
    this.x.subscribe((res: any)=>{
      const scroll = res.target.documentElement.scrollTop;
      console.log(scroll);
      if(scroll > 100){
        this.shownav = false;
      }
      if(scroll < this.otherScroll){
        this.shownav = true;
      }
    })
   }

  ngOnInit(): void {
  }

}
