import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

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
  { path: 'learning/courses', loadComponent:  CourseManagementComponent,  data: { title: `${baseTitle} | Courses`} },
  { path: '',                 redirectTo:     '/home', pathMatch: 'full' },
  { path: '**',               loadComponent:  PageNotFoundComponent,      data: { title: `${baseTitle} | Page not found`} },
];
