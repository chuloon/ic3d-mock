import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss']
})
export class HorizontalNavComponent implements OnInit {
  showSearch: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  searchToggle = () => {
    this.showSearch = !this.showSearch;
  }

}
