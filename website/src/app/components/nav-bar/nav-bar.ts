import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

    @Output() selectedPage = new EventEmitter<string>();

    onNavClick(page: string) {
        this.selectedPage.emit(page);
    }
}
