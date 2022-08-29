import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { KebabCasePipe } from './kebab-case.pipe';
import { BooleanYesNoPipe } from './boolean-yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    KebabCasePipe,
    BooleanYesNoPipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
