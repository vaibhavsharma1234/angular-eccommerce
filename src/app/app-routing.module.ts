import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import your components that will be associated with routes
import { HomeComponent } from './home-module/home/home.component';
// import { AboutComponent } from './about.component';
// import { ContactComponent } from './contact.component';
import { CategoriesComponent } from './home-module/categories/categories.component';
import { CategoryCardComponent } from './home-module/categories/category-card/category-card.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }, // Redirect all other URLs to 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
