import { Cards } from '../cards';

export const dataFake: Array<Cards & { description?: string }> = [
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
  {
    id: '4',
    date: 'March 19, 2022',
    title: ' ATENÇÃO!! A vida muda hoje: Saiu o filme da pantera ',
    photoCover: '../../../assets/octocat.png',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere, architecto placeat aut pariatur dignissimos quo distinctio tempore sunt ea repellendus nobis quidem accusamus, explicabo necessitatibus dolorum quis commodi fugit.',
  },
];
