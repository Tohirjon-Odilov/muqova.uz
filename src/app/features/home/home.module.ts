import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzCarouselComponent, NzCarouselContentDirective} from "ng-zorro-antd/carousel";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselComponent,
    NzCarouselContentDirective,
    NzRowDirective,
    NzColDirective,
    NzCardComponent,
    NzCardMetaComponent,
  ]
})
export class HomeModule { }
