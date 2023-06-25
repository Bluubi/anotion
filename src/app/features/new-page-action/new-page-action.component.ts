import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorComponent } from '../../shared/ui/anchor/anchor.component';

@Component({
  selector: 'app-new-page-action',
  standalone: true,
  imports: [CommonModule, AnchorComponent],
  templateUrl: './new-page-action.component.html',
  styleUrls: ['./new-page-action.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageActionComponent {
  route = [{ outlets: { newPage: 'new-page' } }];
}
