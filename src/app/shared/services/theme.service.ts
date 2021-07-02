import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Option } from "./option.model";
import { StyleManagerService } from "./style-manager.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService) 
    { }

    getThemeOptions(): Observable<Array<Option>> {
      return this.http.get<Array<Option>>("assets/options.json");
    }
  
    setTheme(themeToSet: any) {
      this.styleManager.setStyle(
        "theme",
        `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
      );
    }
}
