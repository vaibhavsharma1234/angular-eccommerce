import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, InputTextModule, FormsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
