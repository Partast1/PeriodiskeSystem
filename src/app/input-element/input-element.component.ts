import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-element',
  template: `
  <button (click)="nextUser()">Next User</button>
  <br>
  <div *ngIf="userObservable | async as user; else loading">
    Hello {{user.last}}, {{user.first}}!
  </div>
  <ng-template #loading let-user>Waiting... (user is {{user|json}})</ng-template>
`
})
export class InputElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
