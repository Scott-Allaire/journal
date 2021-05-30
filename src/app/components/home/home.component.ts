import {Component, OnDestroy, OnInit} from '@angular/core';
import {JournalEntry} from "../../model/journal-entry";
import {Subscription} from "rxjs";
import {JournalService} from "../../services/journal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  journalEntries: JournalEntry[] | undefined;
  storeSub: Subscription | undefined;

  constructor(private journalService: JournalService) {
  }

  ngOnInit() {
    this.storeSub = this.journalService.stateChanged.subscribe(state => {
      if (state) {
        this.journalEntries = state.entries;
      }
    });

    // TODO receive push notification and refresh
    this.journalService.get();
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
