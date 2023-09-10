import { Component, OnInit } from '@angular/core';
import { MachineDataService } from 'src/app/services/machine-data.service';
import { MachinesData } from 'src/app/data/array';
@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.scss'],
})
export class EditMachineComponent implements OnInit {
  isModalOpen: boolean = false;
  editedMachine: any = {};

  ngOnInit(): void {
    this.machineDataService.isOpenSubject.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });
  }
  constructor(private machineDataService: MachineDataService) {}

  closeDialog() {this.isModalOpen = false;
    console.log('heyy');

    this.machineDataService.handleOpen(false);
  }

  saveMachine() {
    this.machineDataService.updateMachineData(this.editedMachine);
    this.machineDataService.handleOpen(false);
  }
}
