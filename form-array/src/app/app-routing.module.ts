import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAngularComponent } from './crud-angular/crud-angular.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { ViewChildTemplateVarComponent } from './view-child-template-var/view-child-template-var.component';

const routes: Routes = [
  {path :'crud', component : CrudAngularComponent},
  {path :'form-array', component : FormArrayExampleComponent},
  {path :'view', component : ViewChildTemplateVarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
