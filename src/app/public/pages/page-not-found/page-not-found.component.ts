import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * Component displayed when a user navigates to a non-existent route.
 * Provides a button to navigate back to the home page.
 */
@Component({
  selector: 'app-page-not-found',
  imports: [
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  /**
   * The invalid path that was attempted to be accessed.
   * This is extracted from the current route's URL.
   */
  protected invalidPath: string = '';

  /**
   * Injected instance of `ActivatedRoute` to access route information.
   */
  private route: ActivatedRoute = inject(ActivatedRoute);

  /**
   * Injected instance of `Router` to handle navigation.
   */
  private router: Router = inject(Router);

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Extracts the invalid path from the current route's URL.
   */
  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  /**
   * Navigates the user to the home page.
   * This method is triggered by the "Go Home" button.
   */
  protected onNavigateHome(): void {
    this.router.navigate(['home']).then();
  }
}
