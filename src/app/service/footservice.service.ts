import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootserviceService {

  constructor(public http: HttpClient) {
  				console.log('Hello ServicesdeezerProvider Provider');
  				 }



  //Récupération de la liste des meilleurs buteurs 
  getButeurs(champ: string): Promise<any>{
 
    const url= "https://api.football-data.org/v2/competitions/"+champ+"/scorers";

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


  //Récupération de la liste des matches terminés
  getMatches(champ: string): Promise<any>{
 
    const url= "https://api.football-data.org/v2/competitions/"+champ+"/matches?status=FINISHED";

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

//Récupération des videos
  getVideos(): Promise<any>{
  
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

  //Récupération des recherches
  getRecherche(): Promise<any>{
  
const url= "https://api.football-data.org/v2/teams/";

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


//Récupération des informations de recherche
  getInfo(id: number): Promise<any>{
  
const url= "https://api.football-data.org/v2/teams/"+id;

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

}