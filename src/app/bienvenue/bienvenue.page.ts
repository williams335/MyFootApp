import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {

  prenom:string;

  constructor(private router: Router, private route: ActivatedRoute) {
  					   this.route.params.subscribe(params => {
						     this.prenom = params['nom']; 
						     });
					    console.log(this.prenom);
					    
  }

  ngOnInit() {
  }

  nextPage(){
   this.router.navigate(['/acceuil']);
          console.log("page acceuil");
  }

}
