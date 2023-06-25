import { TestBed } from '@angular/core/testing';
import { NewPageActionComponent } from './new-page-action.component';
import { AnchorComponent } from '../../shared/ui/anchor/anchor.component';
import { Router } from '@angular/router';
import { NewPageFormComponent } from '../new-page-form/new-page-form.component';

describe('NewPageComponent', () => {
  TestBed.configureTestingModule({
    imports: [NewPageFormComponent, NewPageActionComponent, AnchorComponent],
  }).compileComponents();

  it('should has correct route', () => {
    const { fixture, component } = setup();

    fixture.detectChanges();

    expect(component.route).toEqual([{ outlets: { newPage: 'new-page' } }]);
  });

  it('should create new page if user clicks on link', () => {
    const { fixture } = setup();
    const router = TestBed.inject(Router);

    fixture.detectChanges();

    const navigationSpy = jest
      .spyOn(router, 'navigate')
      .mockResolvedValue(true);

    const anchor = fixture.debugElement.nativeElement.querySelector(
      'app-anchor > a'
    ) as HTMLAnchorElement;

    anchor.click();

    expect(navigationSpy).toHaveBeenCalledWith(
      [{ outlets: { newPage: 'new-page' } }],
      { skipLocationChange: true }
    );
  });
});

function setup() {
  const fixture = TestBed.createComponent(NewPageActionComponent);
  const component = fixture.componentInstance;

  return { fixture, component };
}
