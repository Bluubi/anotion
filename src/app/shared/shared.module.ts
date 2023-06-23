import { NgModule } from '@angular/core';
import { SidenavComponent } from './ui/sidenav/sidenav.component';
import { ButtonComponent } from './ui/button/button.component';
import { ModalComponent } from './ui/modal/modal.component';

@NgModule({
  imports: [SidenavComponent, ButtonComponent, ModalComponent],
  exports: [SidenavComponent, ButtonComponent, ModalComponent],
})
export class SharedModule {}
