import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ScipClientService } from './ScipClientService';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeafoodComponent } from './pages/seafood/seafood.component';
import { DairyComponent } from './pages/dairy/dairy.component';
import { IndexComponent } from './pages/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    SeafoodComponent,
    DairyComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, ScipClientService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
