import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  imports: [NgClass],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

    currentPage = 'Home';
    @Output() selectedPage = new EventEmitter<string>();

    onNavClick(page: string) {
        this.currentPage = page;
        this.selectedPage.emit(page);
    }
}
