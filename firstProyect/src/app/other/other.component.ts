import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  users = ['Penny','Zac','Sheldon','Raj','Bernadethe'];

  constructor() { }

  ngOnInit(): void {
  }

}
