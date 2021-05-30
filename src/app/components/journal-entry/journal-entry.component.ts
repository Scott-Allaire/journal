import {Component, Input, OnInit} from '@angular/core';
import {JournalEntry} from "../../model/journal-entry";

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

  @Input() entry: JournalEntry | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
