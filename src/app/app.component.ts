import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  query : string;
  artists : any;

  constructor(private http : HttpClient) {
    this.query = "";
  }

  ngOnInit() {
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    )
  }

  showArtist(item : any){
    this.query = item.name;
    item.highlight = !item.highlight;
    return false
  }

}
