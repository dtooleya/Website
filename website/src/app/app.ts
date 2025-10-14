import { Component, OnInit } from '@angular/core';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Projects } from "./pages/projects/projects";
import { NgStyle } from '@angular/common';
import { Hobbies } from "./pages/hobbies/hobbies";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavBar, Home, About, Projects, NgStyle, Hobbies, Footer],
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
