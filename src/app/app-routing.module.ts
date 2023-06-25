import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './shared/ui/modal/modal.component';
import { AppComponent } from './app.component';
import { NewPageFormComponent } from './features/new-page-form/new-page-form.component';

export const routes: Routes = [
  {
    path: 'new-page',
    component: NewPageFormComponent,
    outlet: 'newPage',
    title: 'New Page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
