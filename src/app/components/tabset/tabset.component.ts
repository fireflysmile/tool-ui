import {
  Component,
  Output,
  ContentChildren,
  EventEmitter,
  AfterContentInit
} from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})

export class TabsetComponent implements AfterContentInit {

  @Output() select = new EventEmitter();
  @ContentChildren(TabComponent) tabs;

  constructor() { }

  ngAfterContentInit() {
    const tabs = this.tabs.toArray();
    const actives = this.tabs.filter(t => t.active );

    if (actives.length > 1) {
      console.error(`Multiple active tabs set 'active'`);
    } else if (!actives.length && tabs.length) {
      tabs[0].active = true;
    }
  }

  tabClicked(tab) {
    const tabs = this.tabs.toArray();

    tabs.forEach(tabItem => tabItem.active = false);
    tab.active = true;

    this.select.emit(tab);
  }

}
