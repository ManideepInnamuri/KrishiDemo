import { ProductListComponent } from './_modules/products/_components/product-list/product-list.component';
import { LoginComponent } from './_modules/home/_components/login/login.component';
import { AuthGuard } from './_core/_guards/auth.guard';
import { Routes } from '@angular/router';
import { IntroComponent } from './_modules/home/_components/intro/intro.component';
import { SignupComponent } from './_modules/home/_components/signup/signup.component';
import { ProductListResolver } from './_shared/_resolvers/product-list.resolver';

export const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        component: ProductListComponent,
        resolve: { products: ProductListResolver },
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
