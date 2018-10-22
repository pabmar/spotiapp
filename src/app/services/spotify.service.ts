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
      'Authorization': "Bearer BQBCircG6rNXIk0wbBOaQI6fGg6fw9o4P6kFYAEfcB3DXQOVrgVer-W6paarglpSvAzqIHvQeuUNmi9ZD0o"
    });
    return this.http.get(url,{headers});
  } 
  getNewRelease(){
    
    return this.getQuery('browse/new-releases')
          .pipe( map( data =>  data['albums'].items));
  }
  getArtistas(termino:string){
 
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data => data['artists'].items));
  }
  getArtista(id:string){
 
    return this.getQuery(`artists/${id}`)
         //      .pipe(map(data => data['artists'].items));

  }
  getTopTracks(id:string){
 
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
          .pipe(map(data => data['tracks']));

  }
}
