import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../element';
import { PeroidicService } from '../peroidic.service'
import { MessageService } from '../message.service';
import { from } from 'rxjs';



@Component({
  selector: 'app-periodic-display',
  templateUrl: './periodic-display.component.html',
  styleUrls: ['./periodic-display.component.css']
})
export class PeriodicDisplayComponent implements OnInit {
 
  constructor(private peroidicService: PeroidicService, private messageService: MessageService) { }

  element: Element;
Elements: Element[];
selectedEle: Element;



  ngOnInit(): void {
   this.Elements = this.peroidicService.MapData();
  }

  onSelect(t:Element): void {
   //this.selectedEle = ele;
    console.log(t.name);
    alert(t);
//    this.messageService.add(`Element description=${ele.standardPhase}`);
  }
  // getElements(i: number): Element {
  //   let element = this.Elements.push();
  //   return this.element;
  // }
  

}
