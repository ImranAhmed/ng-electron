import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-electron';
  linkRef: HTMLLinkElement;

  themes = [
    { name: 'Light', href: 'https://unpkg.com/clarity-ui/clarity-ui.min.css' },
    { name: 'Dark', href: 'https://unpkg.com/clarity-ui/clarity-ui-dark.min.css' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
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
