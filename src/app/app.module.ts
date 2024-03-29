import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTES
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ServiceEditComponent } from './components/services/service-edit/service-edit.component';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';
import { ServicesServicesComponent } from './components/services/services/services.component';
import { ServiceFormComponent } from './components/services/service-form/service-form.component';
import { ServiceAddComponent } from './components/services/service-add/service-add.component';

//MATERIALES
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import{ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormSearchComponent } from './components/sidenav/form-search/form-search.component';
import { ProductAddComponent } from './components/shop/product-add/product-add.component';
import { ProductEditComponent } from './components/shop/product-edit/product-edit.component';
import { ProductFormComponent } from './components/shop/product-form/product-form.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from './shared/services/theme.service';
import { ThemeComponent } from './components/theme/theme.component';
import { StyleManagerService } from './shared/services/style-manager.service';







@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ServicesServicesComponent,
    ServiceFormComponent,
    ServiceDetailsComponent,
    ServiceEditComponent,
    ServiceAddComponent,
    FormSearchComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductFormComponent,
    ThemeComponent
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AngularFirestore, StyleManagerService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
