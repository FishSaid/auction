import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgURL= 'http://placehold.it/320x150';
  constructor() { }

  // 生命周期钩子之一
  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 1.5, '这是第一个商品，是我在学习Angular4时创建的', ['电子商品', '硬件设备']),
      new Product(1, '第二个商品', 3.29, 3.5, '这是第二个商品，是我在学习Angular4时创建的', ['图书']),
      new Product(1, '第三个商品', 6.99, 3.5, '这是第三个商品，是我在学习Angular4时创建的', ['硬件设备']),
      new Product(1, '第四个商品', 4.99, 4.5, '这是第四个商品，是我在学习Angular4时创建的', ['电子商品', '软件驱动']),
      new Product(1, '第五个商品', 7.59, 2.5, '这是第五个商品，是我在学习Angular4时创建的', ['图书'])
    ];
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }

}