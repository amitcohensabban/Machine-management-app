import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  isOpen = new BehaviorSubject<boolean>(false);

  constructor() {}
  openDialog() {
    this.isOpen.next(true);
  }

  closeDialog() {
    this.isOpen.next(false);
  }
}
