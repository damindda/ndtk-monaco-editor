import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NdtkMonacoEditorService {
  loaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loadMonacoJs() {
    const loadAMDmonaco: any = () => {
      (<any>window).require(['vs/editor/editor.main'], () => {
        this.loaded$.next(true);
      });
    };

    if (!(<any>window).require) {
      const loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'vs/loader.js';
      loaderScript.addEventListener('load', loadAMDmonaco);
      document.body.appendChild(loaderScript);
    } else {
      loadAMDmonaco();
    }
  }
}
