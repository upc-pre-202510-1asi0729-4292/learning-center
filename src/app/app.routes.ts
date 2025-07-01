import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {authenticationGuard} from './iam/services/authentication.guard';

const AboutComponent = () => import('./public/pages/about/about.component').then(m => m.AboutComponent);
const CourseManagementComponent = () => import('./learning/pages/course-management/course-management.component').then(m => m.CourseManagementComponent);
const PageNotFoundComponent = () => import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

const baseTitle = 'ACME Learning Center'
/**
 * Application routes configuration.
 * Defines the paths and their corresponding components or lazy-loaded modules.
 */
export const routes: Routes = [
  { path: 'home',             component:      HomeComponent,              data: { title: `${baseTitle} | Home`} },
  { path: 'about',            loadComponent:  AboutComponent,             data: { title: `${baseTitle} | About us`} },
  { path: 'learning/courses', loadComponent:  CourseManagementComponent,  data: { title: `${baseTitle} | Courses`}, canActivate: [authenticationGuard] },
  { path: 'sign-in',          component:      SignInComponent,              data: { title: `${baseTitle} | Sign-in`} },
  { path: 'sign-up',          component:      SignUpComponent,              data: { title: `${baseTitle} | Sign-up`} },
  { path: '',                 redirectTo:     '/home', pathMatch: 'full' },
  { path: '**',               loadComponent:  PageNotFoundComponent,      data: { title: `${baseTitle} | Page not found`} },
];
