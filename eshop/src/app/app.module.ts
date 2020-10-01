import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { FrameComponent } from './pages/shared/frame/frame.component';
import { AuthorizedGuard } from './guards/authorized.guard';
import { ManagerGuard } from './guards/manager.guard';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent
  ],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    IonicModule.forRoot()],
  providers: [
    AuthorizedGuard,
    ManagerGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
