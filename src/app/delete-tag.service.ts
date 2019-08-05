import { Injectable } from '@angular/core';
import { ItemTag } from './share/models/ItemTag';

@Injectable({
  providedIn: 'root'
})
export class DeleteTagService {
  tags:ItemTag[] = [
    {id:1, tagname:'for all'},
    {id:2, tagname:'for 18+'},
    {id:3, tagname:'under 5yrs'},
    {id:4, tagname:'for baby'},
    {id:5, tagname:'for ladies'},
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
  getId(){
    return this.tags.length;
  }
}
