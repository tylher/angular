import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { convertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { StarComponent } from 'src/shared/star.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent,convertToSpacesPipe,StarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
