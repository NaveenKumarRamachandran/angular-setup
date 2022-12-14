import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  @Input()
  testTitle!: string;

  @Output() outputData: any = new EventEmitter();

  ngOnInit() {
    this.testTitle = "initial";
  }

  test() {}

  triggerCallToParent() {
    return this.outputData.emit("Child To parent communication");
  }

}
