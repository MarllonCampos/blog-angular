import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  private pathToAssets: string = '../../../assets/';
  linkedinLogo: string = `${this.pathToAssets}/linkedin.png`;
  githubLogo: string = `${this.pathToAssets}/github.png`;
}
