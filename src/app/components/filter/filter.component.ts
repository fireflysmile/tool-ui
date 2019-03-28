import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() datas: any;

  @Output() closeFilter: EventEmitter<boolean> = new EventEmitter();
  @Output() okFilter: EventEmitter<boolean> = new EventEmitter();

  formFilter: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formFilter = this.fb.group({});
  }

  // off popup filter
  onClickOutside(e: any) {
    this.closeFilter.emit();
  }

  // submit filter
  onSubmit() {
    this.okFilter.emit();
  }

}
