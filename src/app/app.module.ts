import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { DetailBtnComponent } from './detail-btn/detail-btn.component';

@NgModule({
  declarations: [
    WarningAlertComponent,
    SuccessAlertComponent,
    CardComponent,
    ServersComponent,
    DetailBtnComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [DetailBtnComponent],
})
export class AppModule {}
