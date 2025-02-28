import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EuropeReadinessComponent } from './europe-readiness/europe-readiness.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent,EuropeReadinessComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('container') container!:ElementRef;
  scrolledDown: boolean = false;
  ngAfterViewInit(){
    console.log(this.container)
    
    this.container.nativeElement.addEventListener('scroll', () => {
      const scrollTop = this.container.nativeElement.scrollTop;
      console.log('scroll',scrollTop)
      if (scrollTop >= 10) {
        this.scrolledDown = true;
      } else {
        this.scrolledDown = false;
      }
    })
  }
}
