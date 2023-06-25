import {TestBed} from '@angular/core/testing';
import {NewPageActionComponent} from './new-page-action.component';
import {AnchorComponent} from "../../shared/ui/anchor/anchor.component";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "../../app-routing.module";
import {Router} from "@angular/router";

describe('NewPageComponent', () => {
  TestBed.configureTestingModule({
    imports: [NewPageActionComponent, AnchorComponent, RouterTestingModule.withRoutes(routes)],
  });

  it('should has correct route', () => {
    const { fixture, component } = setup();

    fixture.detectChanges();

    expect(component.route).toEqual([{ outlets: { newPage: 'new-page' } } ])


  });

  it('should create new page if user clicks on link', () => {
    const { fixture } = setup();
    const router = TestBed.inject(Router);

    fixture.autoDetectChanges(true);

    const navigationSpy = jest.spyOn(router, 'navigate');

    const anchor = fixture.debugElement.nativeElement.querySelector('app-anchor > a') as HTMLAnchorElement;

    anchor.click();

    expect(navigationSpy).toHaveBeenCalledWith([ { outlets: { newPage: 'new-page'} }], { skipLocationChange: true})

  });
});

function setup() {
  const fixture = TestBed.createComponent(NewPageActionComponent);
  const component = fixture.componentInstance;

  return { fixture, component };
}
