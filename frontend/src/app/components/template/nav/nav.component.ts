import { Component, OnInit } from '@angular/core';

@Component({
  //seletor do componente para que ele possa ser chamando dentro da DOM
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
