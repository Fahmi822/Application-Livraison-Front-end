import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
   imports: [FormsModule], // Ajoutez FormsModule ici
  styleUrls: ['./add-livreur.component.css'],
})
export class AddLivreurComponent {
  livreurData = {
    nom: '',
    email: '',
    tel: '',
    mdp: '',
  };

  constructor(private authService: AuthService) {}
 
  onSubmit() {
    this.authService.registerLivreur(this.livreurData).subscribe(
      (response) => {
        console.log('Livreur ajouté avec succès', response);
        alert('Livreur ajouté avec succès !');
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du livreur', error);
        alert('Erreur lors de l\'ajout du livreur');
      }
    );
  }
}