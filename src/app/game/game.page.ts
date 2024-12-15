import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { dareChallenges } from '../questions/dare-challenges';
import { truthQuestions } from '../questions/truth-questions';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  player1: string = '';
  player2: string = '';
  currentPlayer: string = '';
  question: string = '';
  turn: number = 1;
  score1: number = 0;
  score2: number = 0;
  selectedType: 'action' | 'verite' | null = null;
  truthQuestions = truthQuestions;
  dareChallenges = dareChallenges;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    this.loadPlayers();
  }

  ngOnInit() {
    // Si les joueurs ne sont pas chargés, retour à l'accueil
    if (!this.player1 || !this.player2) {
      this.router.navigate(['/home']);
    }
  }

  private loadPlayers() {
    // Essayer d'abord de récupérer depuis le state de navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const state = navigation.extras.state as any;
      this.player1 = state.player1;
      this.player2 = state.player2;
    }

    // Si pas dans le state, essayer le localStorage
    if (!this.player1 || !this.player2) {
      const savedPlayer1 = localStorage.getItem('player1');
      const savedPlayer2 = localStorage.getItem('player2');

      if (savedPlayer1 && savedPlayer2) {
        this.player1 = savedPlayer1;
        this.player2 = savedPlayer2;
      }
    }

    // Initialiser le premier joueur aléatoirement
    if (this.player1 && this.player2 && !this.currentPlayer) {
      this.currentPlayer = Math.random() > 0.5 ? this.player1 : this.player2;
    }

    // Charger les scores sauvegardés s'ils existent
    this.loadGameState();
  }

  private loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      const state = JSON.parse(savedState);
      this.score1 = state.score1 || 0;
      this.score2 = state.score2 || 0;
      this.turn = state.turn || 1;
    }
  }

  private saveGameState() {
    const gameState = {
      score1: this.score1,
      score2: this.score2,
      turn: this.turn,
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }

  choose(type: 'action' | 'verite') {
    this.selectedType = type;
    const questions =
      type === 'action' ? this.dareChallenges : this.truthQuestions;
    this.question = questions[Math.floor(Math.random() * questions.length)];
  }

  async nextTurn() {
    // Mettre à jour les scores
    if (this.currentPlayer === this.player1) {
      this.score1++;
    } else {
      this.score2++;
    }

    // Sauvegarder l'état du jeu
    this.saveGameState();

    // Vérifier si la partie est terminée
    if (this.score1 + this.score2 >= 10) {
      await this.showGameOver();
      return;
    }

    this.turn++;
    this.currentPlayer = this.turn % 2 === 0 ? this.player2 : this.player1;
    this.question = '';
    this.selectedType = null;
  }

  async showGameOver() {
    const winner = this.score1 > this.score2 ? this.player1 : this.player2;
    const alert = await this.alertController.create({
      header: 'Fin de la partie ! 🎉',
      message: `Félicitations ${winner} ! Vous avez tous les deux joué merveilleusement bien !`,
      buttons: [
        {
          text: 'Nouvelle partie',
          handler: () => {
            this.resetGame();
          },
        },
        {
          text: "Retour à l'accueil",
          handler: () => {
            this.resetGame();
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }

  resetGame() {
    this.turn = 1;
    this.score1 = 0;
    this.score2 = 0;
    this.question = '';
    this.selectedType = null;
    this.currentPlayer = Math.random() > 0.5 ? this.player1 : this.player2;

    // Effacer l'état du jeu sauvegardé
    localStorage.removeItem('gameState');
  }

  getCurrentPlayerScore(): number {
    return this.currentPlayer === this.player1 ? this.score1 : this.score2;
  }
}
