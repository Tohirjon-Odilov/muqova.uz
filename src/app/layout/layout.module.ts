import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout.component';
import {RouterModule} from '@angular/router';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzTypographyComponent} from "ng-zorro-antd/typography";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyComponent
  ],
  exports: [HeaderComponent, FooterComponent, LayoutComponent] // Boshqa joylarda foydalanish uchun eksport qilish
})
export class LayoutModule {
}
