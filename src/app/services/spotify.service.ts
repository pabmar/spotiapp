 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {  map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
  constructor(private http: HttpClient) {
    console.log("listo!!")
   }

  getQuery(query:String){

    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': "Bearer BQBO4zuro47caeec0E-1KVmjQFC7IkXAtMM8DSA-WBC19WDkQiKJf7PMGRvk3aYv5dLBvSAVgTWDkyrYieg"
    });
    return this.http.get(url,{headers});
  } 
  getNewRelease(){
    
    return this.getQuery('browse/new-releases')
          .pipe( map( data =>  data['albums'].items));
  }
  getArtista(termino:string){
 
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data => data['artists'].items));
  }
}
