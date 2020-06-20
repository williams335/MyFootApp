import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Info } from '../../models/modelsinfo';
import { FootserviceService } from '../service/footservice.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

 
id: number;

  info: Info = new Info();


  constructor(private footserviceService: FootserviceService, private route: ActivatedRoute) { 
  						 this.route.params.subscribe(params => {
						     this.id = params['id']; 
						     });
					    console.log(this.id);
					    }



  ngOnInit() {

  this.ListInfo(this.id);

  }
  //Listes de matches
ListInfo(id: number) {
    console.log('ionViewDidLoad ListInfo');

      this.footserviceService.getInfo(id).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.info=rep;
      console.log(this.info);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });

   

}

}
