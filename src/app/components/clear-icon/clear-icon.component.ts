import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clear-icon',
  templateUrl: './clear-icon.component.html',
  styleUrls: ['./clear-icon.component.css']
})
export class ClearIconComponent {

  @Input()
  public icon: number = 0;

  private path: string = "../../../assets/"

  public url = [
    `${this.path}clear.png`,
    `${this.path}cloud.png`,
    `${this.path}mist.png`,
    `${this.path}rain.png`,
    `${this.path}snow.png`,
    `${this.path}404.png`,
  ]
}
