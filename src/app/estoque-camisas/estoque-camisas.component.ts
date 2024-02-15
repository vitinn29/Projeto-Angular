import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estoque-camisas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estoque-camisas.component.html',
  styleUrl: './estoque-camisas.component.css'
})
export class EstoqueCamisasComponent {
  blusas = [
    { jogador: 'Neymar', time: 'Paris Saint-Germain', quantidade: 20 },
    { jogador: 'Messi', time: 'Paris Saint-Germain', quantidade: 15 },
    { jogador: 'Cristiano Ronaldo', time: 'Manchester United', quantidade: 10 },
    { jogador: 'Mbappé', time: 'Real Madrid', quantidade: 18 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
