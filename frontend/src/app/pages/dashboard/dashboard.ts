import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/header/header';
import { WhiteCard } from '../../shared/white-card/white-card';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, Header, WhiteCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
