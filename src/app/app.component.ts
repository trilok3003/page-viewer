import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('pageViewer') private pageViewer;

  public htmlContent = `<img src="https://placebear.com/200/300">`;
  public documentWidth = 200;
  public documentHeight = 300;
  public zoomLevel = 1;

  public fitContent():void {
    this.pageViewer.fitContent();
  }

  public zoomIn(): void {
    this.zoomLevel += 0.1;
  }

  public zoomOut(): void {
    this.zoomLevel -= 0.1;
  }

}
