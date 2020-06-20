import { Component, OnInit } from '@angular/core';
import { Recherche } from '../../models/modelsrecherche';
import { Router } from '@angular/router';
import { FootserviceService } from '../service/footservice.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {


  recherche: Recherche = new Recherche();


  constructor(private footserviceService: FootserviceService, private router: Router) { 
  }

  ngOnInit() {

  this.ListRecherche();

  }
  //Listes de matches
ListRecherche() {
    console.log('ionViewDidLoad ListRecherche');

      this.footserviceService.getRecherche().then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.recherche=rep;
      console.log(this.recherche);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });

   

}

nextPage(id: number){
           this.router.navigate(['/info', id]);
          console.log("id "+id);
  }

}


