import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/ui/modal/modal.component';

@Component({
  selector: 'app-new-page-form',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './new-page-form.component.html',
  styleUrls: ['./new-page-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageFormComponent {}
