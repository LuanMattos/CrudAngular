import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


import { DragoesDetalheComponent } from './dragoes-detalhe/dragoes-detalhe.component';
import { DragoesEditarComponent } from './dragoes-editar/dragoes-editar.component';
import { LoginComponent } from './login/login.component';
import {AuthRequiredGuard} from './services/auth/auth-required.guard';
import {DragoesResolver} from './resolver/dragoes.resolver';
import {NotFoundComponent} from './shared/not-found/not-found.component';


const routes = [
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
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
