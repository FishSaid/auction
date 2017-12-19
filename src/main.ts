//导入必要的库以便angular可以正常运行在某些老版本浏览器
// import './polyfill.ts'; 
//关闭angular开发者模式
import { enableProdMode } from '@angular/core';
//此方法告诉angular使用那个模块启动整个应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
//整个应用的主模块
import { AppModule } from './app/app.module';
//多环境支持（开发、测试、生产）
import { environment } from './environments/environment';

//生产环境则关闭开发者模式
if (environment.production) {
  enableProdMode();
}

//传入主模块启动angular，使整个应用的起点
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
