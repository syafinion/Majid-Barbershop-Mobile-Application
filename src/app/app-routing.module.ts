import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'recent',
    loadChildren: () => import('./recent/recent.module').then( m => m.RecentPageModule)
  },
  {
    path: 'listcustomers',
    loadChildren: () => import('./listcustomers/listcustomers.module').then( m => m.ListcustomersPageModule)
  },
  {
    path: 'list-booking',
    loadChildren: () => import('./list-booking/list-booking.module').then( m => m.ListBookingPageModule)
  },
  {
    path: 'search-cust',
    loadChildren: () => import('./search-cust/search-cust.module').then( m => m.SearchCustPageModule)
  },
  {
    path: 'testform',
    loadChildren: () => import('./testform/testform.module').then( m => m.TestformPageModule)
  },
  {
    path: 'songlist',
    loadChildren: () => import('./songlist/songlist.module').then( m => m.SonglistPageModule)
  },
  {
    path: 'comp-details/:id',
    loadChildren: () => import('./comp-details/comp-details.module').then( m => m.CompDetailsPageModule)
  },
  {
    path: 'listorders',
    loadChildren: () => import('./listorders/listorders.module').then( m => m.ListordersPageModule)
  },
  {
    path: 'listbookcomp',
    loadChildren: () => import('./listbookcomp/listbookcomp.module').then( m => m.ListbookcompPageModule)
  },
  {
    path: 'edit-booking-admin/:id',
    loadChildren: () => import('./edit-booking-admin/edit-booking-admin.module').then( m => m.EditBookingAdminPageModule)
  },
  {
    path: 'viewcustomers/:id',
    loadChildren: () => import('./viewcustomers/viewcustomers.module').then( m => m.ViewcustomersPageModule)
  },
  {
    path: 'edit-user-admin/:id',
    loadChildren: () => import('./edit-user-admin/edit-user-admin.module').then( m => m.EditUserAdminPageModule)
  },
  {
    path: 'search-user',
    loadChildren: () => import('./search-user/search-user.module').then( m => m.SearchUserPageModule)
  },
  {
    path: 'welcome-admin',
    loadChildren: () => import('./welcome-admin/welcome-admin.module').then( m => m.WelcomeAdminPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reg-admin',
    loadChildren: () => import('./reg-admin/reg-admin.module').then( m => m.RegAdminPageModule)
  },
  {
    path: 'log-admin',
    loadChildren: () => import('./log-admin/log-admin.module').then( m => m.LogAdminPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'search-booking',
    loadChildren: () => import('./search-booking/search-booking.module').then( m => m.SearchBookingPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
