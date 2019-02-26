import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastbookingsPage } from './pastbookings';

@NgModule({
  declarations: [
    PastbookingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PastbookingsPage),
  ],
})
export class PastbookingsPageModule {}
