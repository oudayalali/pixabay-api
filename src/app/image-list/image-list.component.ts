import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[] =[];
  searchQuery: string ="";
  imagesFound: boolean=false;
  searching: boolean=false;
  
  constructor(private _imageService: ImageService) { }

  handleSuccess(data: any){
    this.imagesFound = true;
    this.images = [];
    data.forEach((element: any[])=>{
        return this.images.push(element);
    });
 console.log(data);
  }

  handleError(error: any){
    console.log(error);
    
  }


  searchImages(query: string){
    this.searching=true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching=false
    )
  }



  ngOnInit(): void {
  }

}
