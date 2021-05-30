import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {JournalEntryComponent} from './components/journal-entry/journal-entry.component';
import {NewJournalEntryComponent} from './components/new-journal-entry/new-journal-entry.component';
import {MaterialComponentsModule} from "./material-components/material-components.module";
import {JournalListComponent} from './components/journal-list/journal-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {JournalService} from "./services/journal.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalEntryComponent,
    JournalListComponent,
    NewJournalEntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    JournalService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
