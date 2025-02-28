import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatSelectModule,CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  selected = 'option1';

  selectedCountry: string = '';
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { name: string , src: string }) {}

  onClose(): void {
    this.dialogRef.close('Dialog closed');
  }

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
