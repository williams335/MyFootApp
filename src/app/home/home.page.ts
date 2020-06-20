import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

prenom:string;
private baseurl :string = "https://api.football-data.org/v2/competitions/PL/scorers";
 constructor(private router: Router) {
  					    console.log(this.prenom);
  					    }

 nextPage(nom: string){
           this.router.navigate(['/bienvenue', nom]);
          console.log("Prenom "+nom);
  }
  


  }

