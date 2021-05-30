import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {JournalService} from "../../services/journal.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-journal-entry',
  templateUrl: './new-journal-entry.component.html',
  styleUrls: ['./new-journal-entry.component.scss']
})
export class NewJournalEntryComponent implements OnInit {

  entryForm = new FormGroup({
    text: new FormControl('')
  });

  constructor(private journalService: JournalService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.entryForm.value);
    let text = this.entryForm.get('text')?.value;
    this.journalService.add({text: text});
    this.entryForm.setValue({text: ''});
  }
}
