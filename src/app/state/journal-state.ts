import {JournalEntry} from "../model/journal-entry";

export interface JournalState {
  // when state was fetched
  entries: Array<JournalEntry>;
}
