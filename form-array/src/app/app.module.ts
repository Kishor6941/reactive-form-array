import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAngularComponent } from './crud-angular/crud-angular.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { ViewChildTemplateVarComponent } from './view-child-template-var/view-child-template-var.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAngularComponent,
    FilterPipe,
    FormArrayExampleComponent,
    ViewChildTemplateVarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
