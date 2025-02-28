import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-header',
  imports: [MatListModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() scrolledDown!: boolean;
  showList: boolean = false;

  hoveredMenu: string | null = null;

  openLinkedIn() {
    window.open('https://www.linkedin.com/company/cite-sa/posts/?feedView=all', '_blank', 'noopener,noreferrer');
  }

  openTwitter(){
    window.open('https://x.com/cite_sa', '_blank', 'noopener,noreferrer');
  }

  openFb(){
    window.open('https://www.facebook.com/citesagr', '_blank', 'noopener,noreferrer');
  }

  navToCiteContact(){
    window.open('https://www.cite.gr/contact', '_blank', 'noopener,noreferrer');
  }

}
