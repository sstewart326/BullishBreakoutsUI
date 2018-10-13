import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  selectedFile: File = null;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('screenshot', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('url', formData).subscribe(res => {
      
    });
  }

}
