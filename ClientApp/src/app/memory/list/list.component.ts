import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Unit } from '../../unit/unit';
import { UnitService } from '../../unit/unit.service';
import { Memory } from '../Memory';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class MemoryComponent implements OnInit {
  memories: Memory[] = [];
  units: Unit[] = [];
  currUnit: Unit;
  createForm;

  constructor(
    public memService: MemoryService,
    public unitService: UnitService,
    private formBuilder: FormBuilder) {
    this.createForm = this.formBuilder.group({
      unitId: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.memService.getMemories().subscribe((data: Memory[]) => {
      this.memories = data;
    });

    this.unitService.getUnits().subscribe((units: Unit[]) => {
      this.units = units.filter(u => u.type === "Memory");
    });
  }
  onSubmit(formData) {
    this.memService.createMemory(formData.value).subscribe(res => {
      this.currUnit = this.units.find(u => u.id == res.unitId);
      this.memories.push({ id: res.id, unitId: res.unitId, value: res.value, archived: false, unit: this.currUnit, storages: null });
      formData.setValue({
        unitId: null,
        value: ''
      });
    });
  }

  deleteMemory(id) {
    this.memService.deleteMemory(id).subscribe(res => {
      this.memories = this.memories.filter(item => item.id !== id);
    });

  }
}
