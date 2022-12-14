import { Component, OnInit } from '@angular/core';
import { DataTransferService } from './shared/data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 
  title = 'angular-setup';
  childData!: string;
  componentToComponentData!:string;


  constructor(private dataTranserService: DataTransferService) {
    this.dataTranserService.componentData$.subscribe((data) => {
      this.componentToComponentData = data;
    });
  }

  ngOnInit() {}

  communicateToChild() {
    this.title = ' Child Initialized';
  }

  childToParentCall(data: any) {
    this.childData = data;
  }

  serviceLevelCommunication() {}
}
