import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  MenDropdown: boolean = false;
  WomenDropdown: boolean = false;
  KidsDropdown: boolean = false;
  CollectionDropdown: boolean = false;
 
 
  MenActive(){
    this.MenDropdown = true;
    this.WomenDropdown = false;
    this.KidsDropdown = false;
    this.CollectionDropdown = false; 
  }
  WomenActive(){
    this.MenDropdown =false ;
    this.WomenDropdown =true ;
    this.KidsDropdown = false;
    this.CollectionDropdown = false; 
  }
  KidsActive(){
    this.MenDropdown =false ;
    this.WomenDropdown =false ;
    this.KidsDropdown = true;
    this.CollectionDropdown = false; 
  }
  CollectionActive(){
    this.MenDropdown =false ;
    this.WomenDropdown =false ;
    this.KidsDropdown = false;
    this.CollectionDropdown = true; 
  }
}
