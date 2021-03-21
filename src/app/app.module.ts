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
import {AuthRequiredGuard} from './services/auth/auth-required.guard';
import {SpinnerService} from './shared/spinner/spinner.service';
import {DragoesResolver} from './resolver/dragoes.resolver';
import {NotFoundComponent} from './not-found/not-found.component';
import {ButtonPrimaryComponent} from './shared/dom/buttons/button-primary.component';
import {SubmitPrimaryLoginComponent} from './shared/dom/submit-login/submit-primary-login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      title: 'Home'
    }
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
    canActivate: [AuthRequiredGuard],
    component: DragoesDetalheComponent,
    pathMatch: 'full',
    data: {
      title: 'Dashboard'
    },
    resolve: {
      dragoes: DragoesResolver
    }
  },
  {
    path: 'editar',
    canActivate: [AuthRequiredGuard],
    component: DragoesEditarComponent,
    pathMatch: 'full',
    data: {
      title: 'Edit'
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Page not-found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DragoesDetalheComponent,
    DragoesEditarComponent,
    LoginComponent,
    MenuMobileComponent,
    FooterComponent,
    FormLoginComponent,
    ButtonPrimaryComponent,
    SubmitPrimaryLoginComponent
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
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, SigninService, SpinnerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
