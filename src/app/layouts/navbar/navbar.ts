import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  navBarBrand: string = '';

  navItemsList: NavBarItems[] = [];

  constructor() {

    this.navBarBrand = 'Developer';

    this.navItemsList = [
      { liClass: 'nav-item', aClass: 'nav-link', routerLink: 'homepage', isActive: false, text: 'Home' },
      { liClass: 'nav-item', aClass: 'nav-link', routerLink: 'skills', isActive: false, text: 'Skills' },
      { liClass: 'nav-item', aClass: 'nav-link', routerLink: 'experience', isActive: false, text: 'Experience' },
      { liClass: 'nav-item', aClass: 'nav-link', routerLink: 'contacts', isActive: false, text: 'Contacts' },
    ];
  }


  onActive(item: NavBarItems) {
    this.navItemsList.forEach(navItem => {
      if (navItem !== item) {
        navItem.isActive = false;
      }
    });

    item.isActive = true;

  }
}

class NavBarItems {
  liClass: string;
  aClass: string;
  routerLink: string;
  isActive?: boolean;
  text: string;

  constructor() {
    this.liClass = 'nav-item';
    this.aClass = 'nav-link';
    this.routerLink = '';
    this.isActive = false;
    this.text = '';
  }
}
