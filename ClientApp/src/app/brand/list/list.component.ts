import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';
import { FormBuilder, Validators } from '@angular/forms';

import { BrandService } from '../brand.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListBrandComponent implements OnInit {
  brands: Brand[] = [];
  createForm;
  current: Brand;

  constructor(
    public brandService: BrandService,
    private formBuilder: FormBuilder) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((data: Brand[]) => {
      this.brands = data;
    });
  }

  onSubmit(formData) {
    this.brandService.createBrand(formData.value).subscribe(res => {
      this.brands.push(formData.value);
      formData.setValue({
        name: null
      });
    });
  }

  deleteBrand(id) {
    this.brandService.deleteBrand(id).subscribe(res => {
      this.current = this.brands.find(item => item.id == id);

      if (this.current.Cpus === undefined && this.current.GraphicCardModels === undefined)
        this.brands = this.brands.filter(item => item.id !== id);
    });

  }
}
