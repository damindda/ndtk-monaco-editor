import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdtkMonacoEditorComponent } from './ndtk-monaco-editor.component';

describe('NdtkMonacoEditorComponent', () => {
  let component: NdtkMonacoEditorComponent;
  let fixture: ComponentFixture<NdtkMonacoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdtkMonacoEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdtkMonacoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
