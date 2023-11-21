import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';
import { DataComponent } from './data/data.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:"form",component:FormComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"data",component:DataComponent},
  {path:"modal",component:ModalComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
