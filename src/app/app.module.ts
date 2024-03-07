import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { TodoitemComponent } from './mycomponent/todoitem/todoitem.component';
import { AddtodoComponent } from './mycomponent/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycomponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemComponent,
    AddtodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
