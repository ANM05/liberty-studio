import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public map: any = { lat: -1.294581, lng:  36.782860 };

  constructor() { }

  ngOnInit() {
  }

}
