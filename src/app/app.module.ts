import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
// import { NavbarComponent } from './navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarModule } from './home-module/navbar/navbar.module';
import { HomeModuleModule } from './home-module/home-module.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
// import { HomeComponent } from './home-module/home/home.component';
// import { CategoriesComponent } from './home-module/categories/categories.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatSlideToggleModule,
    NavbarModule,
    ImageModule,
    HomeModuleModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
