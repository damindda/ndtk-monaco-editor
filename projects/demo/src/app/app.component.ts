import { Component } from '@angular/core';
import { MonacoEditorOptions } from 'dist/ndtk-monaco-editor/lib/models/monaco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'demo';

  options: MonacoEditorOptions = { theme: 'vs', readOnly: false, language: 'sql' };

  addtext() {
    this.value = '4234234234324324';
  }

}
