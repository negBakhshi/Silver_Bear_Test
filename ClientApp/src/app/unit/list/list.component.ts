import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeightUnits2LabelMapping, MemoryUnits2LabelMapping, Ports2LabelMapping, UnitTypes2LabelMapping, Power2LabelMapping, Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UnitComponent implements OnInit {

  public MemoryUnits = MemoryUnits2LabelMapping;
  public memUnits = Object.values(this.MemoryUnits);

  public WeightUnits = WeightUnits2LabelMapping;
  public wUnits = Object.values(this.WeightUnits);

  public Portunits = Ports2LabelMapping;
  public portUnit = Object.values(this.Portunits);

  public Powerunits = Power2LabelMapping;
  public powerunits = Object.values(this.Powerunits);

  public UnitTypes = UnitTypes2LabelMapping;
  public uTypes = Object.values(this.UnitTypes);

  units: Unit[] = [];
  values: string[] = [];
  createForm;

  constructor(
    public unitService: UnitService,
    private formBuilder: FormBuilder) {
    this.createForm = this.formBuilder.group({
      type: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.unitService.getUnits().subscribe((data: Unit[]) => {
      this.units = data;
    });

  }
  onSubmit(formData) {
    this.unitService.createUnit(formData.value).subscribe(res => {

      this.units.push({ id: res.id, type: res.type, value: res.value, archived: false });
      formData.setValue({
        type: '',
        value: ''
      });
    });
  }

  deleteUnit(id) {
    this.unitService.deleteUnit(id).subscribe(res => {
      this.units = this.units.filter(item => item.id !== id);
    });
  }

  changeType(type: any) {
    switch (type) {
      case "Memory":
        this.values = this.memUnits;
        break;
      case "Weight":
        this.values = this.wUnits;
        break;
      case "Port":
        this.values = this.portUnit;
        break;
      case "Power":
        this.values = this.powerunits;
        break;
      default:
    }
  }

}
