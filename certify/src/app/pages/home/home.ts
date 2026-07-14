import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly router = inject(Router);

  goToUpload() {
    this.router.navigate(['/upload']);
    console.log('teste');
  }

  downloadSpreadsheet(): void {
    const link = document.createElement('a');
    link.href = '/templates/planilha-modelo.xlsx';
    link.download = 'planilha-modelo.xlsx';
    link.click();
  }
}
