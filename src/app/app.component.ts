import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';

/**
 * Root component of the application.
 * Provides the main layout and navigation for the app.
 */
@Component({
  selector: 'app-root',
  imports: [MatToolbar, MatToolbarRow, MatAnchor, RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
   * Title of the application.
   */
  title = 'learning-center';

  /**
   * Navigation options for the toolbar.
   */
  options = [
    { link: '/home', label: 'home' },
    { link: '/about', label: 'about' },
    { link: '/learning/courses', label: 'courses' },
  ];

  /**
   * Initializes the translation service with the default language.
   * @param translate Instance of TranslateService for managing translations.
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
