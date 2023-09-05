import { Component } from '@angular/core';
import { BigCards, Cards } from 'src/app/cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  relatedPosts: Array<Cards> = [
    {
      id: '1',
      date: 'July 05, 2020',
      title: 'Atenção! Data especial a frente',
      photoCover:
        'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '2',
      date: 'March 21, 2000',
      title: 'Atenção! Data especial a frente',
      photoCover:
        'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '3',
      date: 'January 04, 2019',
      title: 'Atenção! Data especial a frente',
      photoCover:
        'https://images.pexels.com/photos/4695800/pexels-photo-4695800.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  pathToAssets = '../../../assets';

  photoCover: string = `${this.pathToAssets}/octocat.png`;

  bigCardInfo: BigCards = {
    id: '6',
    photoCover: this.photoCover,
    title: 'ATENÇÃO!! A vida muda hoje: Saiu o filme da pantera',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere, architecto placeat aut pariatur dignissimos quo distinctio tempore sunt ea repellendus nobis quidem accusamus, explicabo necessitatibus dolorum quis commodi fugit.',
    date: 'March 19, 2022',
  };
}
