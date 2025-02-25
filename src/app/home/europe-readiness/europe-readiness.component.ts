import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-europe-readiness',
  imports: [CommonModule],
  templateUrl: './europe-readiness.component.html',
  styleUrl: './europe-readiness.component.css'
})
export class EuropeReadinessComponent {

  countries: string[] = [
    "Finland",
    "Switzerland",
    "Germany",
    "Denmark",
    "Sweden",
    "United Kingdom",
    "Netherlands",
    "Norway",
    "Luxembourg",
    "Austria"
  ];
  

}
