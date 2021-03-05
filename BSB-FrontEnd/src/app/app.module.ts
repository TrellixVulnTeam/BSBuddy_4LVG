import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import {HttpClientModule} from '@angular/common/http';
import { RecordLogsComponent } from './record-logs/record-logs.component';
import { AddRecordComponent } from './add-record/add-record.component';
import {FormsModule} from '@angular/forms';
import { RecordByDateComponent } from './record-by-date/record-by-date.component';
import { FoodTrackerComponent } from './food-tracker/food-tracker.component';
import { DailyValuesComponent } from './daily-values/daily-values.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordLogsComponent,
    AddRecordComponent,
    RecordByDateComponent,
    FoodTrackerComponent,
    DailyValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
