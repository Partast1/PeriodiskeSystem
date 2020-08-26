import { Component, OnInit } from '@angular/core';
import { Element } from '../element';
import { PeroidicService } from '../peroidic.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-periodic-display2',
  templateUrl: './periodic-display2.component.html',
  styleUrls: ['./periodic-display2.component.css']
})
export class PeriodicDisplay2Component implements OnInit {
  
  trackById: number;
  element: Element;
Elements: Array<Element> = [];
  constructor(private peroidicService: PeroidicService, private messageService: MessageService) { }

  ngOnInit(): void {
   this.Elements = this.peroidicService.MapData();
   const el = document.querySelector('.list');
   el.className += ' active';
   
  }
  displayNextEle(){
    this.Elements.push();
  }
  displayListItemn(){

   
  }


}
