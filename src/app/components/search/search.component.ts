import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() closeSearch: EventEmitter<boolean> = new EventEmitter();

  searchBy = 'Computers';
  dropdownName = 'Search by';
  listSearchBy: any;

  links = [];
  inputDatas = [];

  import: boolean;
  uploaded: boolean;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.get('welcome.json').subscribe(
      (data: any) => {
        this.listSearchBy = data.listsearch;
      }
    );
  }

  onClickOutside(e: any) {
    this.closeSearch.emit();
  }

}
