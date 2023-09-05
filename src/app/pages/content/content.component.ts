import { BigCards } from 'src/app/cards';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements Omit<BigCards, 'date' | 'id'>, OnInit {
  @Input()
  title: string = 'Artigado';

  @Input()
  photoCover: string =
    'ttps://images.pexels.com/photos/3025620/pexels-photo-3025620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  @Input()
  description: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis harum,  qui reiciendis laboriosam natus unde atque nulla repellat, assumenda  eligendi quam, pariatur iste eaque quae. Modi sit eius amet cum! Lorem  ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam  delectus perspiciatis eos repellendus placeat voluptate labore, ipsam  porro veniam, nemo iure? Et, illum sapiente error impedit iusto explicabo  tenetur';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    if (!id) return;
    const result = dataFake.find((article) => article.id === id);
    console.log(result);
    if (!result) return;
    console;

    this.title = result.title;
    this.description = result.description || '';
    this.photoCover = result.photoCover;
    this.id = result.id;
  }
}
