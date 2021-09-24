import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() voterRating: string;
  @Input() model: any;
  @Output() cardEventTrigger: EventEmitter<any> = new EventEmitter();



  constructor() { }

  ngOnInit() {}

  cardClickEventTrigger(model) {
    this.cardEventTrigger.emit(model);
  }

}
