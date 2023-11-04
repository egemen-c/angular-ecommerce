import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('CategoriesService', () => {
  let service: CategoriesService;
  let http: HttpClient;
  let categories: string[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CategoriesService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllBooks and return an array of Books', () => {
    service.getAllCategories().subscribe(res => {
      expect(res).toEqual(categories);
    });
  });
});
