import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { HeroSection } from './components/hero-section/hero-section';
import { NewsSection } from "./components/news-section/news-section";
import { ProjectSection } from "./components/project-section/project-section";
import { TechSection } from "./components/tech-section/tech-section";
import { PartnersSection } from "./components/partners-section/partners-section";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection, NewsSection, ProjectSection, TechSection, PartnersSection, Cta, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primera-app');
}
