import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private baseurl :string = "https://api.football-data.org/v2/competitions/PL/scorers";
  constructor(public http: HttpClient) {
  console.log('Hello ServicesdeezerProvider Provider');
  this.getjson();
  this.getjsonstreaming();
  }


  //Récupération et Parsage de la liste des artistes recherchés 
  getjson(): Promise<any>{
 
    const url= this.baseurl;

    const httpOptions = {headers: new HttpHeaders().set("X-Auth-Token", "45c7f8afedda475190873423e4ae4045")};

  
        return new Promise(resolve => {

          this.http.get(url, httpOptions).subscribe(data => {
            resolve(data);
            console.log(data);
          }, err => {
            console.log(err);
          });
        });

  }

  getjsonstreaming(): Promise<any>{
  
const url1= "https://free-football-soccer-videos.p.rapidapi.com";

    const httpOptions = {headers: new HttpHeaders().set("x-rapidapi-key", "4877c410b9mshe7fe9517ac14094p1cd13ejsn6a566299c797")	};
        return new Promise(resolve => {

          this.http.get(url1, httpOptions).subscribe(data => {
            resolve(data);
            console.log(data);
          }, err => {
            console.log(err);
          });
        });




  }

}