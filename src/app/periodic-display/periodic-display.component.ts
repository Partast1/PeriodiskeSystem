import { Component, OnInit } from '@angular/core';
import { PeroidicService } from '../peroidic.service'
import { Element } from '../element';

@Component({
  selector: 'app-periodic-display',
  templateUrl: './periodic-display.component.html',
  styleUrls: ['./periodic-display.component.css']
})
export class PeriodicDisplayComponent implements OnInit {
  
  constructor(private peroidicService: PeroidicService) { }

  element: Element;
Elements: Element[]=[];
selectedEle: Element;

  ngOnInit(): void {
    console.log('testtest');
    this.Elements = this.peroidicService.MapData();
    
  }
  // onSelect(ele: Element): void {
  //   this.selectedEle = ele;
  //   this.peroidicService.add(`Dictator description=${ele.standardPhase}`);
  // }
  // getElements(i: number): Element {
  //   let element = this.Elements.push();
  //   return this.element;
  // }
  

}
