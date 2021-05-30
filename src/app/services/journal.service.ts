import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JournalEntry} from "../model/journal-entry";
import {environment} from "../../environments/environment";
import {ObservableStore} from "@codewithdan/observable-store";
import {JournalState} from "../state/journal-state";
import {JournalStoreActions} from "../state/journal-store-actions";

@Injectable({
  providedIn: 'root'
})
export class JournalService extends ObservableStore<JournalState> {
  constructor(private http: HttpClient) {
    super({trackStateHistory: true});
  }

  get(): void {
    this.http.get<Array<JournalEntry>>(`${environment.baseApiUrl}/journal/entries`)
      .subscribe(entries => {
        this.setState({entries: entries}, JournalStoreActions.GetJournalEntries);
      });
  }

  add(entry: JournalEntry): void {
    this.http.post<Array<JournalEntry>>(`${environment.baseApiUrl}/journal/entries`, entry)
      .subscribe(entries => {
        this.setState({entries: entries}, JournalStoreActions.AddJournalEntry);
      });
  }
}
