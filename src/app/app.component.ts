import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName: string = '';
  toDoList: string[] = ['Learn Two Way Data Binding', 'Learn Directives', 'Learn Pipes'];

  @ViewChild("view")
  myrandomelement: ElementRef | undefined;

  totalItems: number = this.toDoList.length;
  customPipeText: string = 'customPipeTest';

  method(): string {
    console.log('running method');
    return 'From typescript!';
  }

  showView() {
    alert(this.myrandomelement?.nativeElement.value);
  }
}
