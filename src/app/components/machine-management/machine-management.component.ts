import { Component, OnInit } from '@angular/core';
// import { MachinesData } from 'src/app/data/array';
import { MachineDataService } from 'src/app/services/machine-data.service';
@Component({
  selector: 'app-machine-management',
  templateUrl: './machine-management.component.html',
  styleUrls: ['./machine-management.component.scss'],
})
export class MachineManagementComponent implements OnInit {
  dataToDisplay: any;
  isModalOpen: boolean = false;
  editedMachine = {};
  ngOnInit(): void {
    this.machineDataService.machinesData.subscribe((data) => {
      this.dataToDisplay = data;
    });
    this.machineDataService.isOpenSubject.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });
  }
  constructor(private machineDataService: MachineDataService) {}

  editMachine(dataItem: any) {
    this.editedMachine = { ...dataItem };
    this.machineDataService.setSelectedMachineId(dataItem.machineId);
    this.machineDataService.handleOpen(true);
  }
  deleteMachine(dataItem: any) {
    const machineIdToDelete = dataItem.machineId;
    const currentData = this.dataToDisplay;
    const updatedData = currentData.filter((machine: any) => {
      return machine.machineId !== machineIdToDelete;
    });
    this.machineDataService.updateData(updatedData);
  }
}
