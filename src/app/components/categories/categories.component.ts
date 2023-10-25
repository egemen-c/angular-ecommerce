import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categories: String[] = [];
  
  constructor(private categoriesService: CategoriesService) {}
  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe( response => {
      this.categories = response.slice(1, 4)
    })
  }
}
