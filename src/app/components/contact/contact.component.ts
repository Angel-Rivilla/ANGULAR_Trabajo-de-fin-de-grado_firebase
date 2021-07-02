import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


import { Option } from 'src/app/shared/services/option.model';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  

  constructor(public readonly themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme("deeppurple-amber");
    console.log(this.themeService.getThemeOptions());
  }

  themeChangeHandler(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
  }

}
