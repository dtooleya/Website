import { Component, OnInit } from '@angular/core';
import { Header } from "./components/header/header";
import { NavBar } from "./components/nav-bar/nav-bar";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Projects } from "./pages/projects/projects";
import { NgStyle } from '@angular/common';
import { Hobbies } from "./pages/hobbies/hobbies";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, NavBar, Contact, Home, About, Projects, NgStyle, Hobbies, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  selectedPage = 'Home';
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  setSelectedPage(page: string) {
    this.selectedPage = page;
  }
}
