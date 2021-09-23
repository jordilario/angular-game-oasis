import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-header-guest',
  templateUrl: './header-guest.component.html',
  styleUrls: ['./header-guest.component.css']
})
export class HeaderGuestComponent implements OnInit {

  title = 'Game Oasis';

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  // Constructor
  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }
}
