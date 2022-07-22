import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  MonacoEditorOptions,
  LineNumbers,
  MonacoEditor,
} from './models/monaco';
import { NdtkMonacoEditorService } from './ndtk-monaco-editor.service';

declare var monaco: any;
@Component({
  selector: 'ndtk-monaco-editor',
  template: ` <div #editorContainer class="monacoEditor"></div> `,
  styleUrls: ['./ndtk-monaco-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NdtkMonacoEditorComponent),
      multi: true,
    },
  ],
})
export class NdtkMonacoEditorComponent
  implements AfterViewInit, ControlValueAccessor
{
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  @Input() options!: MonacoEditorOptions;

  onChange: any = () => {};
  onTouch: any = () => {};
  input!: string;
  editor!: MonacoEditor;
  @Input() language!: string;
  @Input() lineNumbers!: LineNumbers;

  constructor(private monacoEditorLoadService: NdtkMonacoEditorService) {}

  ngAfterViewInit(): void {
    this.monacoEditorLoadService.loadMonacoJs();
    this.monacoEditorLoadService.loaded$.subscribe((data) => {
      if (data) {
        this.monacoConfigs();
      }
    });
  }

  monacoConfigs() {
    const elementRef = this.editorContainer.nativeElement;
    this.editor = monaco.editor.create(elementRef, {
      value: this.options?.value ? this.options.value : null,
      theme: this.options?.theme ? this.options.theme : 'vs',
      language: this.options?.language ? this.options.language : 'javascript',
      lineNumbers: this.lineNumbers ? this.lineNumbers : 'on',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      formatOnType: true,
      formatOnPaste: true,
      wordWrap: 'wordWrapColumn',
      wrappingIndent: 'indent',
      autoDetectHighContrast: true,
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(input: string) {
    if (!this.editor) return;
    this.options.value = input;
    this.editor.getModel()?.setValue(input);
  }
}
