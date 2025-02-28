import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-europe-readiness',
  imports: [CommonModule,MatDialogModule, MatButtonModule],
  templateUrl: './europe-readiness.component.html',
  styleUrl: './europe-readiness.component.css'
})
export class EuropeReadinessComponent {

  constructor(private dialog: MatDialog) {}
  
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
  
  openDialog(country: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1850px',
      maxWidth: '100%',
      height: '820px',
      data: { name: country , src: this.getFlagPath(country)}
    });
  }

  getFlagPath(country: string): string {
    return `assets/flags/${country}.svg`;
  }


}
