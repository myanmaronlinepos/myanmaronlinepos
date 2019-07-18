import { Injectable } from '@angular/core';
import { ItemTag } from './share/models/ItemTag';

@Injectable({
  providedIn: 'root'
})
export class DeleteTagService {
  tags:ItemTag[] = [
    {id:1, productname:'Premier',tag:'for all'},
    {id:2, productname:'Sunday',tag:'for all'},
    {id:3, productname:'Bread',tag:'for all'},
    {id:4, productname:'Juices',tag:'for all'},
    {id:5, productname:'Cookies',tag:'for all'},
  ];
  tag:ItemTag;


  constructor() { }
  getTag(){
    return this.tags;
  }
  setTag(tag:ItemTag){
    this.tag=tag;
    console.log("service");
    console.log(this.tag);
  }
  getSelectedTag(){
    return this.tag;
  }
}
