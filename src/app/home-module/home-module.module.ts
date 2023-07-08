import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';

@NgModule({
  declarations: [HomeComponent, CategoriesComponent, CategoryCardComponent, CardsComponent, CardComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModuleModule {}
