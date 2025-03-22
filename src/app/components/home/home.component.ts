import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {} // Injecter Router

  // Méthode pour naviguer vers la page de connexion
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Méthode pour naviguer vers la page d'inscription
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}