import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VruComponent } from './vru.component';

describe('VruComponent', () => {
  let component: VruComponent;
  let fixture: ComponentFixture<VruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
