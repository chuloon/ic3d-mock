import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() name: string;
  @Input() thumbnail: string;
  @Input() price: string;

  constructor() {
  }

  ngOnInit() {
    this.thumbnail = this.thumbnail ? this.thumbnail : "../../../assets/images/logo.png";
  }

}
