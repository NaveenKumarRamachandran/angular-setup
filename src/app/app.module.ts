import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { DataTransferService } from './shared/data-transfer.service';
import { FormControl, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, AppBarComponent],
  imports: [BrowserModule, AppRoutingModule,
  FormsModule],
  providers: [DataTransferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
