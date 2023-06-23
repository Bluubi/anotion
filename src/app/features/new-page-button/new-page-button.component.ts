import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { ButtonInvoker } from '../../core/button/button-invoker';
import { NewPageCommand } from './command/new-page-command';

@Component({
  selector: 'app-new-page-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './new-page-button.component.html',
  styleUrls: ['./new-page-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageButtonComponent implements OnInit {
  buttonInvoker = new ButtonInvoker();

  ngOnInit() {
    this.buttonInvoker.setOnClick(new NewPageCommand());
  }

  action() {
    this.buttonInvoker.createNewPage();
  }
}
