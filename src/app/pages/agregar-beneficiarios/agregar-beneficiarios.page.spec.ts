import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarBeneficiariosPage } from './agregar-beneficiarios.page';

describe('AgregarBeneficiariosPage', () => {
  let component: AgregarBeneficiariosPage;
  let fixture: ComponentFixture<AgregarBeneficiariosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarBeneficiariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarBeneficiariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
