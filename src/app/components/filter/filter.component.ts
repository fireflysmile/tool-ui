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

  onClickOutside() {
    this.closeFilter.emit();
  }

  onSubmit() {
    this.okFilter.emit();
  }

}
