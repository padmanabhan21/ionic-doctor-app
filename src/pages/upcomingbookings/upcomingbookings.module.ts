import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingbookingsPage } from './upcomingbookings';

@NgModule({
  declarations: [
    UpcomingbookingsPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingbookingsPage),
  ],
})
export class UpcomingbookingsPageModule {}
