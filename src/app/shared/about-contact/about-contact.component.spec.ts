import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContactComponent } from './about-contact.component';

describe('AboutContactComponent', () => {
  let component: AboutContactComponent;
  let fixture: ComponentFixture<AboutContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
