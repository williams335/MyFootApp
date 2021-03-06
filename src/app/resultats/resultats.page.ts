import { Component, OnInit } from '@angular/core';

import { Resultats } from '../../models/modelsresultatsmatches';
import { FootserviceService } from '../service/footservice.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.page.html',
  styleUrls: ['./resultats.page.scss'],
})
export class ResultatsPage implements OnInit {

gamesPL: Resultats = new Resultats();
gamesPD: Resultats = new Resultats();
gamesSA: Resultats = new Resultats();
gamesBL1: Resultats = new Resultats();
gamesFL1: Resultats = new Resultats();

  constructor(private footserviceService: FootserviceService) { 
    }

  ngOnInit() {

  this.ListMatches("PL");
  this.ListMatches("PD");
  this.ListMatches("SA");
  this.ListMatches("BL1");
  this.ListMatches("FL1");
  }
  //Listes de matches
ListMatches(comp: string) {
    console.log('ionViewDidLoad ListMatchesPage');

   switch(comp) { 
   case "PL": { 
      this.footserviceService.getMatches(comp).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.gamesPL=rep;
      console.log(this.gamesPL);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
      break; 
   }

   case "PD": { 
      this.footserviceService.getMatches(comp).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.gamesPD=rep;
      console.log(this.gamesPD);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
      break; 
   } 

   case "SA": { 
      this.footserviceService.getMatches(comp).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.gamesSA=rep;
      console.log(this.gamesSA);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
      break; 
   }

   case "BL1": { 
      this.footserviceService.getMatches(comp).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.gamesBL1=rep;
      console.log(this.gamesBL1);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
      break; 
   }

   default: { 
      this.footserviceService.getMatches(comp).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.gamesFL1=rep;
      console.log(this.gamesFL1);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
      break; 
   } 
}
}
} 


