import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisListComponent } from './animais-list.component';

describe('AnimaisListComponent', () => {
  let component: AnimaisListComponent;
  let fixture: ComponentFixture<AnimaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
