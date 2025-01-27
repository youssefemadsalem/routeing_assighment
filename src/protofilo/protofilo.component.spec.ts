import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtofiloComponent } from './protofilo.component';

describe('ProtofiloComponent', () => {
  let component: ProtofiloComponent;
  let fixture: ComponentFixture<ProtofiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtofiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtofiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
