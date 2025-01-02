import {booleanAttribute, Component, ViewChild} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  inputs: ['title', 'variant', {transform: booleanAttribute, name: 'noBody'}, 'noButton', 'headerClass', 'bodyClass', 'footerClass', 'panelClass'],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  title?: string;
  variant?: string;
  noBody = false;
  noButton = false;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  panelClass?: string;

  @ViewChild('panelFooter', { static: false }) panelFooter: any;
  expand = false;
  reload = false;
  collapse = false;
  remove = false;
  showFooter = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.showFooter = (this.panelFooter) ? this.panelFooter.nativeElement && this.panelFooter.nativeElement.children.length > 0 : false;
    });
  }

  panelExpand() {
    this.expand = !this.expand;
  }
  panelReload() {
    this.reload = true;

    setTimeout(() => {
      this.reload = false;
    }, 1500);
  }
  panelCollapse() {
    this.collapse = !this.collapse;
  }
  panelRemove() {
    this.remove = !this.remove;
  }
}
