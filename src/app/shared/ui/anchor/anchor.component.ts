import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [CommonModule],
  template: `<a (click)="navigate()"><ng-content></ng-content></a>`,
  styleUrls: ['./anchor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnchorComponent {
  router = inject(Router);
  @Input('href') link!: any[];
  @Input() skipLocationChange = false;

  async navigate(){
    await this.router.navigate(this.link)
  }
}
