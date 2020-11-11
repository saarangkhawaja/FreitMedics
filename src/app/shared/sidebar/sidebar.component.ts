import { Component, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[] = [];
  selectedItem: any;
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private router: Router,
  ) {
  }

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES;
  }

  // initailizeSideBarItems() {
  //   this.navigationService.currentSideBarActivePath.subscribe((res: any) => {
  //     this.selectedItem = this.sidebarnavItems.find(item => item.path === res);
  //   });
  // }

  select(item: RouteInfo) {
    if (item.path === '/auth/logout') {
      this.router.navigateByUrl('', { replaceUrl: true });
      return;
    }
    this.selectedItem = item;
  };

  isActive(item: any) {
    return this.selectedItem === item;
  };
}
