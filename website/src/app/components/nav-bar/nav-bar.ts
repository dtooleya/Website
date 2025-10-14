import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-nav-bar',
  imports: [NgClass, MatMenuModule],
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
