import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../brand/brand';
import { BrandService } from '../../brand/brand.service';
import { Cpu } from '../cpu';
import { CPUService } from '../cpu.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCPUComponent implements OnInit {
  brands: Brand[] = [];
  cpus: Cpu[] = [];
  createcpuForm;
  currBrand: Brand;

  constructor(
    public cpuService: CPUService,
    public brandService: BrandService,
    private formBuilder: FormBuilder) {
    this.createcpuForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      series: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cpuService.getCPUs().subscribe((data: Cpu[]) => {
      this.cpus = data;
    });

    this.brandService.getBrands().subscribe((br: Brand[]) => {
      this.brands = br;
    });
  }
  onSubmit(formData) {
    this.cpuService.createCPU(formData.value).subscribe(res => {
      this.currBrand = this.brands.find(b => b.id == res.brandId);
      this.cpus.push({ id: res.id, brandId: res.brandId, series: res.series, brand: this.currBrand, archived: false });
      formData.setValue({
        brandId: null,
        series: null
      });
    });
  }

  deleteCpu(id) {
    this.cpuService.deleteCPU(id).subscribe(res => {
      this.cpus = this.cpus.filter(item => item.id !== id);
    });

  }
}
