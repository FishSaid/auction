import { Component } from '@angular/core';


// 组件元数据装饰器
@Component({
  // css选择器selector
  selector: 'app-root',
  // 指定组件的模板
  templateUrl: './app.component.html',
  // 指向css文件，编写组件模板所需的样式
  styleUrls: ['./app.component.css']
})

// 普通的ts文件，加上装饰器，可以被angular识别为组件
// 此类定义了控制器，包含模板所需的属性、方法
export class AppComponent {
  title = 'app';
}
