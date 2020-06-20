import { Component, OnInit } from '@angular/core';

import { Buteurs } from '../../models/modelsbuteurs';
import { FootserviceService } from '../service/footservice.service';

@Component({
  selector: 'app-buteurs',
  templateUrl: './buteurs.page.html',
  styleUrls: ['./buteurs.page.scss'],
})
export class ButeursPage implements OnInit {

gamesPL: Buteurs = new Buteurs();
gamesPD: Buteurs = new Buteurs();
gamesSA: Buteurs = new Buteurs();
gamesBL1: Buteurs = new Buteurs();
gamesFL1: Buteurs = new Buteurs();

  constructor(private footserviceService: FootserviceService) { }

  ngOnInit() {

  this.ListButeurs("PL");
  this.ListButeurs("PD");
  this.ListButeurs("SA");
  this.ListButeurs("BL1");
  this.ListButeurs("FL1");
  }
  //Listes de matches
ListButeurs(comp: string) {
    console.log('ionViewDidLoad ListButeursPage');

   switch(comp) { 
   case "PL": { 
      this.footserviceService.getButeurs(comp).then((rep) => {
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
      this.footserviceService.getButeurs(comp).then((rep) => {
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
      this.footserviceService.getButeurs(comp).then((rep) => {
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
      this.footserviceService.getButeurs(comp).then((rep) => {
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
      this.footserviceService.getButeurs(comp).then((rep) => {
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


