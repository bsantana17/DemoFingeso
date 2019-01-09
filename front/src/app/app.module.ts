import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDesafioComponent } from './list-desafio/list-desafio.component';
import { ListIdeaComponent } from './list-idea/list-idea.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { AddDesafioComponent } from './add-desafio/add-desafio.component';
import {DesafioService} from './desafio-service.service'
import {IdeaService} from './idea-service.service'


@NgModule({
  declarations: [
    AppComponent,
    ListDesafioComponent,
    ListIdeaComponent,
    AddIdeaComponent,
    AddDesafioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DesafioService,
  IdeaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
