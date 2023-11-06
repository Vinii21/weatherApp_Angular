import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-error',
  templateUrl: './card-error.component.html',
  styleUrls: ['./card-error.component.css']
})
export class CardErrorComponent {
  @Input()
  public active: boolean = false;
}
