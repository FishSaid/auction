import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  // 在这个元数据中只能声明组件、指令、管道
  // NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent
  ],
  imports: [
    // 声明了应用正常运行还需要的“东西”（AppModule还需要的其他模块）
    BrowserModule,   // web应用在浏览器上运行必备的模块
    FormsModule,      // 表单处理
    HttpModule        // 与服务器通信的模块
  ],
  providers: [],      // 声明模块提供了怎样的服务
  bootstrap: [AppComponent]   // 声明模块的主组件
})
export class AppModule { }
