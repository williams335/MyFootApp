import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultatsPage } from './resultats.page';

describe('ResultatsPage', () => {
  let component: ResultatsPage;
  let fixture: ComponentFixture<ResultatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
