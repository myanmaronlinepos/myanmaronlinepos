import { Injectable } from '@angular/core';
import { ItemTag } from './share/models/ItemTag';

@Injectable({
  providedIn: 'root'
})
export class DeleteTagService {
  tags:ItemTag[] = [
    {id:1, tag_name:'for all'},
    {id:2, tag_name:'for 18+'},
    {id:3, tag_name:'under 5yrs'},
    {id:4, tag_name:'for baby'},
    {id:5, tag_name:'for ladies'},
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
