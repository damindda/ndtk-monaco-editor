import { NgModule } from '@angular/core';
import { NdtkMonacoEditorComponent } from './ndtk-monaco-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NdtkMonacoEditorComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NdtkMonacoEditorComponent
  ]
})
export class NdtkMonacoEditorModule { }
