import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './common/faq/faq.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { BookAppoinmentComponent } from './common/book-appoinment/book-appoinment.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ServicesComponent } from './common/services/services.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FaqComponent, BookAppoinmentComponent, ServicesComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
