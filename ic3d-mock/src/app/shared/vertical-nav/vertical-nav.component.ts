import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit {
  designerCollapsed: boolean = true;
  industriesCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleIndustries = () => {
    this.industriesCollapsed = !this.industriesCollapsed;
  }

  toggleDesigners = () => {
    this.designerCollapsed = !this.designerCollapsed;
  }
}
