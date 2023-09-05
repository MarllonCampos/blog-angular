import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  relatedPosts: Array<Number> = [1, 2, 3];
  pathToAssets = '../../../assets';

  photoCover: string = `${this.pathToAssets}/octocat.png`;

  bigCardInfo: {
    photoCover: string;
    cardDescription: string;
    cardTitle: string;
    cardDate: string;
  } = {
    photoCover: this.photoCover,
    cardTitle: 'ATENÇÃO!! A vida muda hoje: Saiu o filme da pantera',
    cardDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere, architecto placeat aut pariatur dignissimos quo distinctio tempore sunt ea repellendus nobis quidem accusamus, explicabo necessitatibus dolorum quis commodi fugit.',
    cardDate: 'March 19, 2022',
  };
}
