import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import {FormLoginComponent} from './shared/form-login/form-login.component';
import {SigninService} from './services/signin/signin.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LoginComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'dashboard',
    component: DragoesDetalheComponent,
    pathMatch: 'full',
  },
  {
    path: 'editar',
    component: DragoesEditarComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DragoesDetalheComponent,
    DragoesEditarComponent,
    LoginComponent,
    MenuMobileComponent,
    FooterComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, SigninService],
  bootstrap: [AppComponent]
})

export class AppModule { }
