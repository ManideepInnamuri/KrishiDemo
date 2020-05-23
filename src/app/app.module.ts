import { ProductService } from './_core/_services/product.service';
import { ProductListComponent } from './_modules/products/_components/product-list/product-list.component';
import { AuthGuard } from './_core/_guards/auth.guard';
import { ProductListResolver } from './_shared/_resolvers/product-list.resolver';
import { ErrorInterceptorProvider } from './_core/_services/error.interceptor';
import { AuthService } from './_core/_services/auth.service';
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './_shared/_components/nav/nav.component';
import { IntroComponent } from './_modules/home/_components/intro/intro.component';
import { SignupComponent } from './_modules/home/_components/signup/signup.component';
import { appRoutes } from './routes';
import { LoginComponent } from './_modules/home/_components/login/login.component';
import { ProductCardComponent } from './_modules/products/_components/product-card/product-card.component';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    SignupComponent,
    LoginComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CommonModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:56771'],
        blacklistedRoutes: ['localhost:56771/api/auth'],
      },
    }),
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    ProductService,
    AuthGuard,
    ProductListResolver,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
