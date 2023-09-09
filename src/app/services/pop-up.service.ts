import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  isOpen = new BehaviorSubject<boolean>(false);

  constructor() { }
  openDialog() {
    console.log('Opening Dialog');
    this.isOpen.next(true);
  }

  closeDialog() {
    console.log('Closing Dialog');
    this.isOpen.next(false);
  }

}

