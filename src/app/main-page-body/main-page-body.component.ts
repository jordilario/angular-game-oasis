import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page-body',
  templateUrl: './main-page-body.component.html',
  styleUrls: ['./main-page-body.component.css'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        transform: 'translateY(0%)', display:'block', opacity: 1})
      ), state('hidden', style({
        transform: 'translateY(100%)'})
      ), transition('hidden => shown', [
        animate('0.5s')
      ])
    ])
  ]
})
export class MainPageBodyComponent implements OnInit {
  state = 'hidden';
  opacity = 0;

  ngAfterViewInit() {
    setTimeout( () => {
    this.state = 'shown';
    }, 200);
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
