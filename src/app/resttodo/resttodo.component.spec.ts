import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResttodoComponent } from './resttodo.component';

describe('ResttodoComponent', () => {
  let component: ResttodoComponent;
  let fixture: ComponentFixture<ResttodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResttodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResttodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
