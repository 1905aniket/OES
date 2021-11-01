import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { ServicesComponent } from './main/services/services.component';
import { TeamComponent } from './main/team/team.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Service', component:ServicesComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Team', component:TeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
