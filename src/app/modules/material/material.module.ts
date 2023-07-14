import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';


const matModule = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    matModule
  ]
})
export class MaterialModule { }
