import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeTrackerComponent } from './type-tracker/type-tracker.component';
import { TypeTrackerService } from './services/type-tracker.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeTrackerComponent
  ],
  providers: [TypeTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
