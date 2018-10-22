import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas:any[ ] =[];
  loading:boolean;
  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }
  buscar(termino){
    this.loading = true;
    console.log(termino)
    this.spotify.getArtista(termino).subscribe((data:any) =>{
      this.artistas = (data);
      this.loading = false;
    })
  }
}
