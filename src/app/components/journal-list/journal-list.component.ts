import {Component, Input, OnInit} from '@angular/core';
import {JournalEntry} from "../../model/journal-entry";

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {

  @Input() list: JournalEntry[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
