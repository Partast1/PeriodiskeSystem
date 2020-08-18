import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-periodic-detail',
  templateUrl: './periodic-detail.component.html',
  styleUrls: ['./periodic-detail.component.css']
})
export class PeriodicDetailComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
