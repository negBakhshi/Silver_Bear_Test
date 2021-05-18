import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../brand/brand';
import { BrandService } from '../../brand/brand.service';
import { GraphicCardModel } from '../../graphic-card-model/graphic-card-model';
import { GraphicCardModelService } from '../../graphic-card-model/graphic-card-model.service';
import { GraphicCard } from '../graphic-card';
import { GraphicCardService } from '../graphic-card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class GraphicCardComponent implements OnInit {
  gcmodels: GraphicCardModel[] = [];
  graphiccards: GraphicCard[] = [];
  currModel: GraphicCardModel;
  createGCForm;

  constructor(
    public gcService: GraphicCardService,
    public brandService: BrandService,
    public gcModelService: GraphicCardModelService,
    private formBuilder: FormBuilder) {
    this.createGCForm = this.formBuilder.group({
      modelId: ['', Validators.required],
      series: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.gcService.getGraphicCards().subscribe((data: GraphicCard[]) => {
      this.graphiccards = data;
    });

    this.gcModelService.getGraphicCardModels().subscribe((gcmodel: GraphicCardModel[]) => {
      this.gcmodels = gcmodel;
    });
  }
  onSubmit(formData) {
    this.gcService.createGraphicCard(formData.value).subscribe(res => {
      this.currModel = this.gcmodels.find(m => m.id == res.modelId);
      this.graphiccards.push({ id: res.id, modelId: res.modelId, series: res.series, archived: false, model: this.currModel });
      formData.setValue({
        modelId: null,
        series: ''
      });
    });
  }

  deleteGraphicCard(id) {
    this.gcService.deleteGraphicCard(id).subscribe(res => {
      this.graphiccards = this.graphiccards.filter(item => item.id !== id);
    });

  }
}
