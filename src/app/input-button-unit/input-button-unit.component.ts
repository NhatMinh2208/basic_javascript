import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input class="todo-input" #inputElementValue placeholder="input"
  (keyup.enter)="submitValue(inputElementValue.value)">
<button class="btn" (click)="submitValue(inputElementValue.value)">
<span>Save</span>
</button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {
    console.log('new');
    //this.changeTitle('I love Angular');
    console.log(this.title);
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    // }, 3000);
  }
  submitValue(newTitle: string): void {
    // console.log(newTitle);
    this.submit.emit(newTitle);
  }
  generateTitle(): string {
    return 'This title was generated by a method.';
  }
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

}