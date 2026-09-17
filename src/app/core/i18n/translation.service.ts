import { Injectable, computed, signal } from '@angular/core';
import { Language, Translation, translations } from './translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLanguage = signal<Language>('ro');
  readonly language = this.currentLanguage.asReadonly();
  readonly text = computed<Translation>(() => translations[this.currentLanguage()]);

  toggleLanguage(): void {
    this.currentLanguage.update((language) => (language === 'ro' ? 'en' : 'ro'));
  }
}
