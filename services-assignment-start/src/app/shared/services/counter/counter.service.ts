import { Injectable, OnInit, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private activatedCount:number;
  private disactivatedCount:number;

  emitacivated = new EventEmitter<number>();
  emitdisactivated = new EventEmitter<number>();

  constructor() { 
    this.activatedCount = 0;
    this.disactivatedCount = 0;
  }

  incrementActivatedCount(){
    console.log("ZMIENNA PO AKTYWACJI: " + this.activatedCount + "  Zmienna2 po deaktyw: " + this.disactivatedCount);
    this.activatedCount++;
    this.emitacivated.emit(this.activatedCount);
  }

  incrementDisactivatedCount(){
    this.disactivatedCount++;
    this.emitdisactivated.emit(this.disactivatedCount);
  }

  getActivatedCount(){
    return this.activatedCount;
  }

  getDisactivatedCount(){
    return this.disactivatedCount;
  };
}
