import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

const materialModule = [
  MatChipsModule,
  MatDividerModule
];

@NgModule({
  exports: [
    ...materialModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    ...materialModule
  ]
})
export class SharedModule { }
