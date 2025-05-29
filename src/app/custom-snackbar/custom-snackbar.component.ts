import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-snackbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-snackbar-content">
      <span>{{ data }}</span>
      <button class="close-btn" (click)="close()" aria-label="Fechar">&#10005;</button>
    </div>
  `,
  styles: [`
    .custom-snackbar-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
    }
    .close-btn {
      background: none;
      border: none;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      margin-left: 4px;
      padding: 0 4px;
      border-radius: 50%;
      transition: background 0.2s;
    }
    .close-btn:hover {
      background: rgba(255,255,255,0.15);
    }
  `]
})
export class CustomSnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<CustomSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) { }

  close() {
    this.snackBarRef.dismiss();
  }
} 