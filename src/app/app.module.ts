import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeBr from '@angular/common/locales/pt';
registerLocaleData(localeBr, 'pt');


import { DragoesDetalheComponent } from './dragoes-detalhe/dragoes-detalhe.component';
import { DragoesEditarComponent } from './dragoes-editar/dragoes-editar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {MenuMobileComponent} from './shared/menu-mobile/menu-mobile.component';
import { AppComponent } from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SpinnerService} from './shared/spinner/spinner.service';
import {ButtonPrimaryComponent} from './shared/dom/buttons/button-primary.component';
import {SubmitPrimaryLoginComponent} from './shared/dom/submit-login/submit-primary-login.component';
import {SigninService} from './auth/signin/signin.service';



@NgModule({
  declarations: [
    AppComponent,
    DragoesDetalheComponent,
    DragoesEditarComponent,
    LoginComponent,
    MenuMobileComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    SubmitPrimaryLoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, SigninService, SpinnerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
