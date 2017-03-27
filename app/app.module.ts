import { NgModule }      from '@angular/core';  //Imports general module code
import { BrowserModule } from '@angular/platform-browser'; //code necessary to run our app in the browser
import { AppComponent }   from './app.component'; //refers to the root component we created

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }    //standard name for the root module's class declaration.
