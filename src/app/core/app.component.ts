import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppService } from './app.service';
import { AppNavigation } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  navigationMenu: AppNavigation[];
  activeApp: AppNavigation;

  private unsubscribe: Subject<void> = new Subject();


  constructor(@Inject(DOCUMENT) private document: Document, private appService: AppService) {
  }


  ngOnInit(): void {

    this.getNavigation();

  }

  getNavigation(): void {

    this.appService.getNavigationMenu()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((menu: Array<AppNavigation>) => {
        this.navigationMenu = menu;
        this.activeApp = this.navigationMenu[0];
      },
        error => {
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
