import { Component, OnInit, Sanitizer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageLocationsResponse } from '../models/image-locations-response';
import { ImageSet } from '../models/image-set';
import { Observable } from 'rxjs';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  images: ImageLocationsResponse;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: Sanitizer
  ) { }

  ngOnInit() {
    this.getImageLocations();
  }

  getImageLocations = () => {
    this.httpClient.get<ImageLocationsResponse>('http://localhost:8090/rest/1.0/get-image-locations').subscribe(
      response => {
        this.images = response;
      }, 
      err => {
        console.log(err)
      });
  }

}
