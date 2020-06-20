import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButeursPage } from './buteurs.page';

describe('ButeursPage', () => {
  let component: ButeursPage;
  let fixture: ComponentFixture<ButeursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButeursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
