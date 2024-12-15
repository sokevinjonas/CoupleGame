import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  player1: string = '';
  player2: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Récupérer les noms des joueurs du localStorage s'ils existent
    const savedPlayer1 = localStorage.getItem('player1');
    const savedPlayer2 = localStorage.getItem('player2');

    if (savedPlayer1 && savedPlayer2) {
      this.player1 = savedPlayer1;
      this.player2 = savedPlayer2;
    }
  }

  startGame() {
    if (this.player1 && this.player2) {
      // Sauvegarder les noms des joueurs
      localStorage.setItem('player1', this.player1);
      localStorage.setItem('player2', this.player2);

      // Naviguer vers la page de jeu
      this.router.navigate(['/game'], {
        state: {
          player1: this.player1,
          player2: this.player2,
        },
      });
    }
  }

  isFormValid(): boolean {
    return this.player1.trim().length > 0 && this.player2.trim().length > 0;
  }

  // Optionnel: méthode pour effacer les données sauvegardées
  clearSavedData() {
    localStorage.removeItem('player1');
    localStorage.removeItem('player2');
    this.player1 = '';
    this.player2 = '';
  }
}
