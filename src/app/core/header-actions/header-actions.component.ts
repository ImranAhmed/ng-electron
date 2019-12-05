import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {

  private linkRef: HTMLLinkElement;
  themes = [
    { name: 'Light', href: 'https://unpkg.com/clarity-ui/clarity-ui.min.css' },
    { name: 'Dark', href: 'https://unpkg.com/clarity-ui/clarity-ui-dark.min.css' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {

    const theme = this.themes[0];
    this.linkRef = this.document.createElement('link');
    this.linkRef.rel = 'stylesheet';
    this.linkRef.href = theme.href;
    this.document.querySelector('head').appendChild(this.linkRef);
  }

  setTheme(theme) {
    this.linkRef.href = theme.href;
  }

}
