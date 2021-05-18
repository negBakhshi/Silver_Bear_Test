import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Memory } from '../../memory/memory' 
import { MemoryService } from '../../memory/memory.service';
import { Storage } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class StorageComponent implements OnInit {
  memories: Memory[] = [];
  storages: Storage[] = [];
  currMemory: Memory;
  createForm;

  constructor(
    public storageService: StorageService,
    public memService: MemoryService,
    private formBuilder: FormBuilder) {

    this.createForm = this.formBuilder.group({
      memoryId: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.storageService.getStorages().subscribe((data: Storage[]) => {
      this.storages = data;
    });

    this.memService.getMemories().subscribe((memories: Memory[]) => {
      this.memories = memories;
    });
  }
  onSubmit(formData) {
    this.storageService.createStorage(formData.value).subscribe(res => {
      this.currMemory = this.memories.find(m => m.id == res.memoryId);
      this.storages.push({ id: res.id, memoryId: res.memoryId, type: res.type, archived: false, memory: this.currMemory });
      formData.setValue({
        memoryId: null,
        type: ''
      });
    });
  }

  deleteStorage(id) {
    this.storageService.deleteStorage(id).subscribe(res => {
      this.storages = this.storages.filter(item => item.id !== id);
    });

  }
}
