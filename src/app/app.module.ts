import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Header } from './app-header/header.component';

import { ProductModule } from './app-products/product.module';
import { EditingModule } from './app-editing/editing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddingFormModule } from './app-editing/adding-form/additing-form.module';

@NgModule({
  declarations: [
    AppComponent,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    EditingModule,
    AddingFormModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
