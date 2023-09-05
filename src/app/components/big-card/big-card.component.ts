import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = 'ATENÇÃO!! A vida muda hoje: Saiu o filme da pantera';

  @Input()
  cardDescription: string =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere, architecto placeat aut pariatur dignissimos quo distinctio tempore sunt ea repellendus nobis quidem accusamus, explicabo necessitatibus dolorum quis commodi fugit.';

  @Input()
  cardDate: string = 'January 18, 2020';

  @Input()
  id: string = '4';
}
