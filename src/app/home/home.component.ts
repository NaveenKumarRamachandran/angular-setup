import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../shared/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  componentToComponentData!: string;
  constructor(private dataTransfer: DataTransferService) {}

  ngOnInit(): void {}

  callDataTransfer() {
    this.dataTransfer.setComponentInteraction(this.componentToComponentData);
  }
}
