import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import 'slick-carousel/slick/slick';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    $('.myCarousel').slick({
      // dots: true,
      // centerMode: true,
      // infinite: false,
      // centerPadding: '60px',
      // slidesToShow: 1

      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '70px',
            slidesToShow: 1,
            focusOnSelect: true,
            infinite: true
          }
        }
      ]
    });
  }

}
