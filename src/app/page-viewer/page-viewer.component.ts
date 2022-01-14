import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-viewer',
  templateUrl: './page-viewer.component.html',
  styleUrls: ['./page-viewer.component.scss']
})
export class PageViewerComponent {

  private _zoomLevel: number;
  private _minZoom: number = 0.2;
  private _maxZoom: number = 3;

  @Input() public htmlContent: string;
  @Input() public contentWidth: number;
  @Input() public contentHeight: number;

  @ViewChild('containerElement') private containerElement;
  @ViewChild('contentElement') private contentElement;

  @Output()
  public zoomLevelChange = new EventEmitter<number>();

  @Input()
  public set zoomLevel( value: number ) {
    this._zoomLevel = Math.min( this._maxZoom, Math.max(value, this._minZoom) );
    this.zoomContent( this._zoomLevel );
    this.zoomLevelChange.emit( this._zoomLevel );
  }

  constructor( private element: ElementRef ) { }

  /**
   * Fit the page content to use 90% of the available width.
   */
  public fitContent(): void {

    const componentWidth = this.element.nativeElement.clientWidth;
    const scaleFactor = (0.9 * componentWidth) / this.contentWidth;

    this.zoomLevel = scaleFactor;
  }

  /**
   * Zoom the content to a specific zoom level
   */
  private zoomContent( scaleFactor: number ): void {

    if( !this.containerElement ) {
      return;
    }

    const scaledWidth = this.contentWidth * scaleFactor;
    const scaledHeight = this.contentHeight * scaleFactor;

    const container = this.containerElement.nativeElement;
    const content = this.contentElement.nativeElement;

    container.style.width = `${scaledWidth}px`;
    container.style.height = `${scaledHeight}px`;
    content.style.transform = `scale(${scaleFactor})`;

  }

  public scrollToTop(): void {
    const component = this.element.nativeElement;
    component.scrollTop = 0;
  }

}