import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioRootComponent } from './portfolio-root.component';

describe('PortfolioRootComponent', () => {
  let component: PortfolioRootComponent;
  let fixture: ComponentFixture<PortfolioRootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
