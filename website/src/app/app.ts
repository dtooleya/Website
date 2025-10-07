import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { NavBar } from "./components/nav-bar/nav-bar";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Projects } from "./pages/projects/projects";

@Component({
  selector: 'app-root',
  imports: [Header, NavBar, Contact, Home, About, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  selectedPage = 'Home';

  setSelectedPage(page: string) {
    this.selectedPage = page;
  }
}
