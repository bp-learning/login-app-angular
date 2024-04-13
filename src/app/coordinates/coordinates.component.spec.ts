import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesComponent } from './coordinates.component';
import { By } from '@angular/platform-browser';

describe('CoordinatesComponent', () => {
  let component: CoordinatesComponent;
  let fixture: ComponentFixture<CoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the click coordinates', () => {
    let gridElement = fixture.debugElement.query(By.css('#grid'));
    let messageElement = fixture.debugElement.query(By.css('#message'));

    gridElement.triggerEventHandler('click', {
      button: 0,
      clientX: 100,
      clientY: 200,
    });

    expect(messageElement.nativeElement.innerText).toEqual('');

    fixture.detectChanges();

    expect(messageElement.nativeElement.innerText).toEqual(
      'You clicked at coordinates x = 100, y = 200'
    );
  });
});
