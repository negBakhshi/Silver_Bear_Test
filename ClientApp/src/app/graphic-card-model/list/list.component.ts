import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../brand/brand';
import { BrandService } from '../../brand/brand.service';
import { GraphicCardModel } from '../graphic-card-model';
import { GraphicCardModelService } from '../graphic-card-model.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class GraphicCardModelComponent implements OnInit {
  brands: Brand[] = [];
  gcModels: GraphicCardModel[] = [];
  currBrand: Brand;
  creategcmForm;

  constructor(
    public gcmService: GraphicCardModelService,
    public brandService: BrandService,
    private formBuilder: FormBuilder) {
    this.creategcmForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.gcmService.getGraphicCardModels().subscribe((data: GraphicCardModel[]) => {
      this.gcModels = data;
    });

    this.brandService.getBrands().subscribe((br: Brand[]) => {
      this.brands = br;
    });
  }
  onSubmit(formData) {
    this.gcmService.createGraphicCardModel(formData.value).subscribe(res => {
      this.currBrand = this.brands.find(b => b.id == res.brandId);
      this.gcModels.push({ id: res.id, brandId: res.brandId, name: res.name, brand: this.currBrand, graphicCards: null, archived: false });
      formData.setValue({
        brandId: null,
        name: ''
      });
    });
  }

  deleteGraphicCardModel(id) {
    this.gcmService.deleteGraphicCardModel(id).subscribe(res => {
      this.gcModels = this.gcModels.filter(item => item.id !== id);
    });

  }
}
