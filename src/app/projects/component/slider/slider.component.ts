import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() sliderInputValue: any;
  @Output() sliderEventTrigger: EventEmitter<any> = new EventEmitter();

  isSmallSizeScreen: boolean;
  slideOpts = {};

  constructor(public platform: Platform) { }

  ngOnInit() {
    this.plateFormCheck();
    this.platform.resize.subscribe(async () => {
      this.plateFormCheck();
    });
  }

  plateFormCheck() {
    if (this.platform.width() < 427) {
      this.slideOpts = {
        spaceBetween: 2,
        slidesPerView: 1
      };
      this.isSmallSizeScreen = true;
    } else if (this.platform.width() < 640 && this.platform.width() > 427) {
      this.slideOpts = {
        spaceBetween: 2,
        slidesPerView: 1.4
      };
      this.isSmallSizeScreen = true;
    }
    else if (this.platform.width() < 854 && this.platform.width() > 640) {
      this.slideOpts = {
        spaceBetween: 2,
        slidesPerView: 2
      };
      this.isSmallSizeScreen = true;
    }
    else if (this.platform.width() < 1300 && this.platform.width() > 1200) {
      this.slideOpts = {
        spaceBetween: 2,
        slidesPerView: 1
      };
      this.isSmallSizeScreen = false;
    }
    else if (this.platform.width() < 1200) {
      this.slideOpts = {
        spaceBetween: 1,
        slidesPerView: 3.2
      };
      this.isSmallSizeScreen = true;
    }
    else {
      this.isSmallSizeScreen = false;
      this.slideOpts = {
        spaceBetween: 2,
        slidesPerView: 1.5,
        freeMode: true
      };
    }
  }

  sliderClickEventTrigger(modelValue) {
    this.sliderEventTrigger.emit(modelValue);
  }

}
