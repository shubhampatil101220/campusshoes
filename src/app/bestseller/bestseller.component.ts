import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent {
  products:Array<any>=[];
  constructor( private service:MasterService,
               private router:Router                
  ){
   
  }
  ngOnInit(){
    this.products=this.service.products;
  }
  showButton:number =999;

  @ViewChild('scroll') containerRef!: ElementRef;

  items = Array.from({ length: 10 }, (_, i) => i + 1);

  scrollLeft() {
    this.containerRef.nativeElement.scrollBy({
      left: -200, // Adjust the value to scroll more or less
      behavior: 'smooth' // Smooth scrolling
    });
  }

  scrollRight() {
    this.containerRef.nativeElement.scrollBy({
      left: 200, // Adjust the value to scroll more or less
      behavior: 'smooth' // Smooth scrolling
    });
  }
  showbutton(index:number){
    this.showButton=index;
  }
  hidebutton(){
    this.showButton=999;
  }
 
  productInfo(data:any){
    console.log("data",data);
    
    localStorage.setItem('product',JSON.stringify(data))
   this.service.selectedProduct(data);
   this.router.navigate([`/product-detail/${data.id}`]);
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }
   
  
  
}
