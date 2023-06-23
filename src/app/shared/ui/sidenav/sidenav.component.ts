import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageButtonComponent } from '../../../features/new-page-button/new-page-button.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, NewPageButtonComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
