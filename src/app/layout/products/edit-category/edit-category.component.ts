import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ItemCategory } from 'src/app/share/models/itemCategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category:ItemCategory;
  constructor(
    private categoryservice: CategoryService
  ) {}

  Rename() {
  }

  ngOnInit() {
    this.category=this.categoryservice.getSelectedCategory();
    console.log(this.category.categoryname);
  }

}
