import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {

  contactInfos: Contact[] = [];

  constructor() {
    this.contactInfos = [
      {
        cardIcon: 'bi-telephone',
        cardTitle: 'PHONE',
        cardText: '+63-920-714-2897'
      },
      {
        cardIcon: 'bi bi-envelope',
        cardTitle: 'EMAIL',
        cardText: 'jewelcaudilla@gmail.com'
      },
      {
        cardIcon: 'bi bi-linkedin',
        cardTitle: 'Linkedin',
        cardText: 'www.linkedin.com/in/jewel-caudilla'
      }
    ];
  }
}

class Contact {
  cardIcon: string;
  cardTitle: string;
  cardText: string;

  constructor() {
    this.cardIcon = '';
    this.cardTitle = '';
    this.cardText = '';
  }
}
