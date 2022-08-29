import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() toDoItems: string[] = [];
  @Output() toDoItemsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  complete(indexToRemove: number): void {
    const newItems = this.toDoItems.filter((item, index) => index !== indexToRemove);
    this.toDoItemsChange.emit(newItems);
  }

}
