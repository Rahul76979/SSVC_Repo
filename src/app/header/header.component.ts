import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // slides = [
  //   {img: "../../assets/Slider_Image_1.jpg"},
  //   {img: "../../assets/Slider_Image_2.jpg"}
  // ];
  // slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , "autoplay":true , "autoplaySpeed":4000};

}
