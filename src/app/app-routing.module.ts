import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'student-list',
    component:StudentListComponent
  },
  {
    path:'signup',
    component:SignupComponent,
    children:[
      {
        path:'',
        redirectTo:'register-utd',
        pathMatch:'full'
      },
      // {
      //   path:'',
      //   component:RegisterUtdComponent
      // },
      {
        path:'register-utd',
        component:RegisterUtdComponent
      },
      {
        path:'register-urf',
        component:RegisterUrfComponent
      }
    ]
  },
  {
    path:'employees',
    loadChildren: () => import('../app/crud/crud.module').then( m => m.CrudModule)
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
