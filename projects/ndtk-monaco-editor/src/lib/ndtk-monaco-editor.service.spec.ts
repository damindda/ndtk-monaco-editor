import { TestBed } from '@angular/core/testing';

import { NdtkMonacoEditorService } from './ndtk-monaco-editor.service';

describe('NdtkMonacoEditorService', () => {
  let service: NdtkMonacoEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NdtkMonacoEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
