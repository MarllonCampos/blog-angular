import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardDate: string = '';

  @Input()
  id: string = '';

  @Input()
  cardTitle: string = '';
}
