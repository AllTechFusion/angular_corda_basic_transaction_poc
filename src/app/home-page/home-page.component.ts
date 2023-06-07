import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private router: Router) { }

partyDetails:any

ngOnInit(): void {
  this.partyDetails=[
    {
      name:"BANK A",
      location:"India",
    },
    {
      name:"BANK B",
      location:"US",
    },
    {
      name:"BANK C",
      location:"Germany",
    },
    {
      name:"BANK D",
      location:"India",
    }
  ]
  
}

login(value:any){
  this.router.navigate(['/party/:'+value]);
}
}
