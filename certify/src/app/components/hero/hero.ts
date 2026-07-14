import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
    private readonly router = inject(Router);

  goToUpload() {
    this.router.navigate(['/upload']);
    console.log('teste')
  }

  downloadSpreadsheet(): void {
    const link = document.createElement('a');
    link.href = '/templates/planilha-modelo.xlsx';
    link.download = 'planilha-modelo.xlsx';
    link.click();
  }
}
