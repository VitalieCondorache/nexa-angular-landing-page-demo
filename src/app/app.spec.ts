import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<App>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('renders the Romanian landing page by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Ideile bune merită un loc mai clar.',
    );
    expect(compiled.querySelectorAll('.pricing-card')).toHaveLength(3);
  });

  it('switches the page language to English', () => {
    const languageButton = fixture.nativeElement.querySelector(
      '.language-switcher',
    ) as HTMLButtonElement;

    languageButton.click();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain(
      'Good ideas deserve a clearer place.',
    );
  });

  it('opens and closes the mobile navigation', () => {
    const menuButton = fixture.nativeElement.querySelector('.menu-button') as HTMLButtonElement;

    menuButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.mobile-nav')).toBeTruthy();

    menuButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.mobile-nav')).toBeNull();
  });

  it('toggles an FAQ answer', () => {
    const firstQuestion = fixture.nativeElement.querySelector(
      '.faq-item button',
    ) as HTMLButtonElement;

    firstQuestion.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.faq-item p')).toBeTruthy();

    firstQuestion.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.faq-item p')).toBeNull();
  });
});
