import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'login-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/log-in.svg")
    ).addSvgIcon(
      'chart-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/chart-uptrend.svg")
    );
  }
}
