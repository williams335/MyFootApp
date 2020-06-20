import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextPage_resultats(){
  this.router.navigate(['/resultats']);
          console.log("page resultats");

  }
    nextPage_buteurs(){
  this.router.navigate(['/buteurs']);
          console.log("page buteurs");

  }
  
  nextPage_recherche(){
  this.router.navigate(['/recherche']);
          console.log("page recherche");

  }

}
