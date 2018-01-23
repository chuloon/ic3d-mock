import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  showOverwatchFilters: boolean;
  shopItems = [
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },

    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
    {
      name: "Star Guardian Lux Staff",
      price: "$79.99"
    },
    {
      name: "Bayonetta Pin",
      price: "$20.00"
    },
    {
      name: "Mercy Gun",
      price: "$40.00"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleFilter = (category) => {
    eval("this." + category + "= !" + "this." + category);
  }

}