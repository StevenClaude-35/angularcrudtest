import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestorentComponent } from './add-restorent/add-restorent.component';
import { UpdateRestorentComponent } from './update-restorent/update-restorent.component';
import { ListRestorentComponent } from './list-restorent/list-restorent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddRestorentComponent},
  {path:'update/:id',component:UpdateRestorentComponent},
  {path:'list',component:ListRestorentComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
