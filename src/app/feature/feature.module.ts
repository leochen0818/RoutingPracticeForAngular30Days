import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [FeatureComponent]
})
export class FeatureModule { }
