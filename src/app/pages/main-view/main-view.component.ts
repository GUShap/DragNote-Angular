import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board, Column } from 'src/app/models/board.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  board: Board = new Board('Test Board', [
    new Column('Ideas', ['some Randome Idea', 'some Randome Idea34']),
    new Column('Research', ['something to look for', 'some Topic', 'thesis']),
    new Column('Todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new Column('Done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])
  ])

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
