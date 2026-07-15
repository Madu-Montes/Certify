import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './upload-card.html',
  styleUrl: './upload-card.scss',
})
export class UploadCard {
  isDragging = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.validateAndProcessFile(file);
    }
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.validateAndProcessFile(file);
    }
  }

  private validateAndProcessFile(file: File) {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    if (fileExtension === 'xlsx' || fileExtension === 'xls') {
      console.log('Arquivo aceito com sucesso:', file.name);
    } else {
      alert('Formato inválido! Por favor, envie apenas arquivos .xlsx ou .xls');
    }
  }

  downloadSpreadsheet(): void {
    const link = document.createElement('a');
    link.href = '/templates/planilha-modelo.xlsx';
    link.download = 'planilha-modelo.xlsx';
    link.click();
  }
}
