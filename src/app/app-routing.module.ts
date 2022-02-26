import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { UnathorizedComponent } from './components/error/unathorized/unathorized.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/user/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DetailComponent } from './components/user/detail/detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './model/role';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER, Role.ADMIN] },
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  //admin panel
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: 'transaction-list',
    component: TransactionListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  //error pages
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '401',
    component: UnathorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
}
