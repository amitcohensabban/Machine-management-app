import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MachinesData } from '../data/array';
@Injectable({
  providedIn: 'root',
})
export class MachineDataService {
  isOpenSubject = new BehaviorSubject<boolean>(false);
  private selectedMachineSubject = new BehaviorSubject<any>(null);
  selectedMachine = this.selectedMachineSubject.asObservable();
  machinesData = new BehaviorSubject<any>(MachinesData);
  selectedMachineId = new BehaviorSubject<number | null>(null);
  setSelectedMachine(machine: any) {
    this.selectedMachineSubject.next(machine);
  }
  handleOpen(isOpen: boolean) {
    this.isOpenSubject.next(isOpen);
  }
  updateData(data: any) {
    this.machinesData.next(data);
  }
  updateMachineData(updatedMachine: any) {
    const currentData = this.machinesData.getValue();
    const updatedData = currentData.map((machine: any) => {
      if (machine.machineId === this.selectedMachineId.getValue()) {
        return { ...machine, ...updatedMachine };
      }
      return machine;
    });

    this.machinesData.next(updatedData);
  }

  setSelectedMachineId(machineId: number | null) {
    this.selectedMachineId.next(machineId);
  }
  constructor() {}
}
