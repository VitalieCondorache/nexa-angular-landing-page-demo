import { Component, signal } from '@angular/core';
import { TranslationService } from './core/i18n/translation.service';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly isMenuOpen = signal(false);
  protected readonly openFaq = signal<number | null>(null);

  constructor(protected readonly translation: TranslationService) {}

  protected get t() {
    return this.translation.text;
  }

  protected toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }
}
