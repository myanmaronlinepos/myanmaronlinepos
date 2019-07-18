import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetagComponent } from './deletetag.component';

describe('DeletetagComponent', () => {
  let component: DeletetagComponent;
  let fixture: ComponentFixture<DeletetagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
