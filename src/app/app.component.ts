import { Component, AfterViewInit, ElementRef } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public indicate: string;
  public webview: any;
  constructor(private elmRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.webview = this.elmRef.nativeElement.querySelector('webview');
    this.webview.addEventListener('did-start-loading', () => {
      this.indicate = 'did-start-loading';
    });

    this.webview.addEventListener('did-stop-loading', () => {
      this.indicate = 'did-stop-loading';

      this.webview.executeJavaScript(`window`, false, (res) => {
        console.log('res: :: :', res);
      })
    });

    this.webview.addEventListener('dom-ready', (res) => {
      this.indicate = 'dom-ready';
    });
  }

}
