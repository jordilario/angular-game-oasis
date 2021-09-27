import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HostListener } from "@angular/core";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header-guest',
  templateUrl: './header-guest.component.html',
  styleUrls: ['./header-guest.component.css'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        transform: 'translateY(0%)', display:'block', opacity: 1})
      ), state('hidden', style({
        transform: 'translateY(0%)'})
      ), transition('hidden => shown', [
        animate('0.2s')
      ])
    ])
  ]
})
export class HeaderGuestComponent implements OnInit {

  title = 'Game Oasis';
  showFiller = false;

  links = [
    {
      name: "Home",
      url: "/home"
    },
    {
      name: "About us",
      url: "/about-us"
    },
    {
      name: "Download",
      url: "/download"
    },
    {
      name: "Technical support",
      url: "/technical-support"
    }
  ];

  links_form = [
    {
      name: "Log In",
      url: "/login"
    },
    {
      name: "Sign Up",
      url: "/signup"
    }
  ];

  state = 'hidden';
  opacity = 0;

  ngAfterViewInit() {
    setTimeout( () => {
    this.state = 'shown';
    }, 200);
  }

  scrHeight:any;
  scrWidth:any;

  collapsed: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.collapsed = this.scrWidth < 1000 ? true:false;
  }

  // Constructor
  constructor() {
    this.getScreenSize();

  }
 

  ngOnInit(): void {
  }
}
