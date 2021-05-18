import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopsService } from '../laptops.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';

import { FormBuilder, Validators } from '@angular/forms';
import { CPUService } from '../../cpu/cpu.service';
import { GraphicCard } from '../../graphic-card/graphic-card';
import { GraphicCardService } from '../../graphic-card/graphic-card.service';
import { MemoryService } from '../../memory/memory.service';
import { PortService } from '../../port/port.service';
import { StorageService } from '../../storage/storage.service';
import { UnitService } from '../../unit/unit.service';
import { Memory } from '../../Memory/Memory';
import { Port } from '../../port/port';
import { Unit } from '../../unit/unit';
import { Cpu } from '../../cpu/cpu';
import { Storage } from '../../storage/storage';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class LaptopListComponent implements OnInit {
  createLaptopForm;
  laptops: Laptop[] = [];
  currMemory: Memory;
  currStorage: Storage;
  currPort: Port;
  currGCard: GraphicCard;
  currWunit: Unit;
  currPunit: Unit;
  currCpu: Cpu;
  currLaptop: Laptop;
  editLaptopForm;

  laptop: Laptop;
  memories: Memory[] = [];
  storages: Storage[] = [];
  ports: Port[] = [];
  gCards: GraphicCard[] = [];
  wunits: Unit[] = [];
  punits: Unit[] = [];
  cpus: Cpu[] = [];

  divCreate: boolean = false;
  divEdit: boolean = false;

  constructor(
    public laptopService: LaptopsService,
    public memoryService: MemoryService,
    public storageService: StorageService,
    public portService: PortService,
    public gcService: GraphicCardService,
    public unitService: UnitService,
    public cpuService: CPUService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.createLaptopForm = this.formBuilder.group({
      memoryId: ['', Validators.required],
      storageId: ['', Validators.required],
      graphicCardId: ['', Validators.required],
      cpuId: ['', Validators.required],
      portId: ['', Validators.required],
      powerUnitId: ['', Validators.required],
      weightUnitId: ['', Validators.required],
      power: ['', Validators.required],
      weight: ['', Validators.required]
    });

    this.editLaptopForm = this.formBuilder.group({
      id: [''],
      memoryId: ['', Validators.required],
      storageId: ['', Validators.required],
      graphicCardId: ['', Validators.required],
      cpuId: ['', Validators.required],
      portId: ['', Validators.required],
      powerUnitId: ['', Validators.required],
      weightUnitId: ['', Validators.required],
      power: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.laptopService.getLaptops().subscribe((data: Laptop[]) => {
      this.laptops = data;
    });

    this.memoryService.getMemories().subscribe((data: Memory[]) => {
      this.memories = data;
    });
    this.storageService.getStorages().subscribe((data: Storage[]) => {
      this.storages = data;
    });
    this.portService.getPorts().subscribe((data: Port[]) => {
      this.ports = data;
    });
    this.gcService.getGraphicCards().subscribe((data: GraphicCard[]) => {
      this.gCards = data;
    });
    this.unitService.getUnits().subscribe((units: Unit[]) => {
      this.punits = units.filter(u => u.type === "Power");
      this.wunits = units.filter(u => u.type === "Weight");
    });
    this.cpuService.getCPUs().subscribe((cpus: Cpu[]) => {
      this.cpus = cpus;
    });
  }

  deleteLaptop(id) {
    this.laptopService.deleteLaptop(id).subscribe(res => {
      this.laptops = this.laptops.filter(item => item.id !== id);
    });
  }

  showCreateDiv() {
    this.divCreate = true;
    this.divEdit = false;
  }

  showEditDiv(laptopId) {
    this.divEdit = true;
    this.laptop = this.laptops.find(l => l.id == laptopId);
    this.editLaptopForm.patchValue(this.laptop);
    this.divCreate = false;
  }

  onSubmitC(formData) {
    this.divCreate = false;
    this.reloadGrid(formData.value)
    this.laptops.push(this.currLaptop);
    formData.setValue({
      memoryId: '',
      storageId: '',
      graphicCardId: '',
      cpuId: '',
      portId: '',
      powerUnitId: '',
      weightUnitId: '',
      power: '',
      weight: ''
    });

    this.laptopService.createLaptop(formData.value).subscribe(result => {
    });
  }

  onSubmitU(formData) {
    this.reloadGrid(formData.value);
    const targetIdx = this.laptops.map(item => item.id).indexOf(this.laptop.id);
    this.laptops[targetIdx] = this.currLaptop;


    this.divEdit = false;
    this.laptopService.updateLaptop(this.laptop.id, formData.value).subscribe(result => {
    });
  }

  reloadGrid(res) {
    if (res) {
      this.currMemory = this.memories.find(m => m.id == res.memoryId);
      this.currStorage = this.storages.find(m => m.id == res.storageId);
      this.currPort = this.ports.find(m => m.id == res.portId);
      this.currGCard = this.gCards.find(m => m.id == res.graphicCardId);
      this.currWunit = this.wunits.find(m => m.id == res.weightUnitId);
      this.currPunit = this.punits.find(m => m.id == res.powerUnitId);
      this.currCpu = this.cpus.find(m => m.id == res.cpuId);

      this.currLaptop = {
        id: res.id,
        memoryId: res.memoryId,
        storageId: res.storageId,
        graphicCardId: res.graphicCardId,
        cpuId: res.cpuId,
        portId: res.portId,
        powerUnitId: res.powerUnitId,
        power: res.power,
        weight: res.weight,
        weightUnitId: res.weightUnitId,
        graphicCard: this.currGCard,
        cpu: this.currCpu,
        port: this.currPort,
        memory: this.currMemory,
        powerUnit: this.currPunit,
        storage: this.currStorage,
        weightUnit: this.currWunit
      };
    }
  }

}
