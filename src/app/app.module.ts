import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DetailsComponent } from './components/details/details.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SpinnerComponent,
    DetailsComponent,
    ElectronicsComponent,
    JeweleryComponent,
    MenComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
