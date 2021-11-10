import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WarningAlertComponent, SuccessAlertComponent, CardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [CardComponent],
})
export class AppModule {}
