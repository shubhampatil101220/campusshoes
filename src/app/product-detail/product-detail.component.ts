import { Component, Inject, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Product } from '../Models';
import { BestsellerComponent } from '../bestseller/bestseller.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productData: any = {}


  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log("init");
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.viewProduct();

    });
  }
  // viewProduct(){
  //   debugger
  //   if(Object.keys(this.service.getProduct()).length === 0){
  //     console.log(typeof this.service.getProduct());

  //     this.productData = {

  //       id: 1,
  //       name: "Nike React Infinity Run Flyknit",
  //       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //       brand: "NIKE",
  //       gender: "MEN",
  //       category: "RUNNING",
  //       size: [6, 7, 8, 9, 10],
  //       color: ["White", "Blue", "Black"],
  //       price: 160,
  //       discountPrice:140,
  //       is_in_inventory: true,
  //       items_left: 3,
  //       imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  //       slug: "nike-react-infinity-run-flyknit"
  //   }
  //   }else{
  //     this.productData= JSON.parse(localStorage.getItem('product')!)
  //     console.log(this.productData);

  //   }


  // }

  viewProduct() {
    debugger
    this.productData = JSON.parse(localStorage.getItem('product')!)
    console.log(this.productData);
  }






}
