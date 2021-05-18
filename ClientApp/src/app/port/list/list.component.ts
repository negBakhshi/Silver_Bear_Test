import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Unit } from '../../unit/unit';
import { UnitService } from '../../unit/unit.service';
import { Port } from '../port';
import { PortService } from '../../port/port.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PortComponent implements OnInit {
  units: Unit[] = [];
  ports: Port[] = [];
  createForm;
  currUnit: Unit;

  constructor(
    public portService: PortService,
    public unitService: UnitService,
    private formBuilder: FormBuilder) {

    this.createForm = this.formBuilder.group({
      unitId: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.portService.getPorts().subscribe((data: Port[]) => {
      this.ports = data;
    });

    this.unitService.getUnits().subscribe((unit: Unit[]) => {
      this.units = unit.filter(u => u.type === "Port");
    });
  }
  onSubmit(formData) {
    this.portService.createPort(formData.value).subscribe(res => {
      this.currUnit = this.units.find(b => b.id == res.unitId);
      this.ports.push({ id: res.id, unitId: res.unitId, quantity: res.quantity, unit: this.currUnit });
      formData.setValue({
        unitId: null,
        quantity: null
      });
    });
  }

  deletePort(id) {
    this.portService.deletePort(id).subscribe(res => {
      this.ports = this.ports.filter(item => item.id !== id);
    });

  }
}
