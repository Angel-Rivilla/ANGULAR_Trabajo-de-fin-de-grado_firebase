import { Component, EventEmitter, Input, Output} from "@angular/core";


import { Option } from 'src/app/shared/services/option.model';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})

export class ThemeComponent{

  @Input() public options: Array<Option> | undefined;
  opciones = [
    1,2
   ]
  
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet: string) {
    this.themeChange.emit(themeToSet);
  }

}
