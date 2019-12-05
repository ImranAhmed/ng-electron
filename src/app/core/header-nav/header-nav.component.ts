import { Component, Input } from '@angular/core';

import { AppNavigation } from '../navigation';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  @Input() navigationMenu: AppNavigation[];
  @Input() activeAppId: string;

}
