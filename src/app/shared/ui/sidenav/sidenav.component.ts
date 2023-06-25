import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageActionComponent } from '../../../features/new-page-action/new-page-action.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, NewPageActionComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
