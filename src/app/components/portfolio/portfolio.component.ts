import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selected:string = 'all'
  constructor() { }

  ngOnInit(): void {
  }

}
