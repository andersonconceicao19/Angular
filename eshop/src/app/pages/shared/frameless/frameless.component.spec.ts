import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FramelessComponent } from './frameless.component';

describe('FramelessComponent', () => {
  let component: FramelessComponent;
  let fixture: ComponentFixture<FramelessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramelessComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FramelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
