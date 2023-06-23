import { TestBed } from '@angular/core/testing';
import { NewPageButtonComponent } from './new-page-button.component';

describe('NewPageComponent', () => {
  TestBed.configureTestingModule({
    imports: [NewPageButtonComponent],
  });

  it('should set command when component initialize', () => {
    const { fixture, component } = setup();

    const setOnClickSpy = jest.spyOn(component.buttonInvoker, 'setOnClick');

    fixture.detectChanges();

    expect(setOnClickSpy).toHaveBeenCalled();
  });

  it('should create new page if user clicks on button', () => {
    const { fixture, component } = setup();

    component.buttonInvoker.createNewPage = jest.fn();
    const button = fixture.debugElement.nativeElement.querySelector(
      'app-button'
    ) as HTMLButtonElement;

    button.click();

    expect(component.buttonInvoker.createNewPage).toHaveBeenCalled();
  });
});

function setup() {
  const fixture = TestBed.createComponent(NewPageButtonComponent);
  const component = fixture.componentInstance;

  return { fixture, component };
}
