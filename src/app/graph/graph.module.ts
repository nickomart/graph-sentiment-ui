import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TeamComponent]
})
export class GraphModule { }
