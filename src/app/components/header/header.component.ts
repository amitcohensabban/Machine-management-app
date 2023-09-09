import { Component, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpen: boolean = false;
  constructor(private popUpService: PopUpService) {}
  ngOnInit(): void {
    this.popUpService.isOpen.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });

  }
  handle(){
    this.popUpService.openDialog();
  }
}
