import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName: string = '';
  toDoList: string[] = ['Learn Two Way Data Binding', 'Learn Directives', 'Learn Pipes'];

  totalItems: number = this.toDoList.length;
  customPipeText: string = 'customPipeTest';
}
