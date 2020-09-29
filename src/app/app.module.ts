import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DragoesDetalheComponent } from './dragoes-detalhe/dragoes-detalhe.component';
import { DragoesEditarComponent } from './dragoes-editar/dragoes-editar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'listar',
    component: DragoesDetalheComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DragoesDetalheComponent,
    DragoesEditarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
