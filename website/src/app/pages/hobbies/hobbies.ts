import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-hobbies',
  imports: [MatTabsModule],
  templateUrl: './hobbies.html',
  styleUrls: ['./hobbies.css'],
})
export class Hobbies implements OnInit {
  constructor(private httpService: HttpService) { }

  albums: Album[] = [];
  albumCount = 0;

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.httpService.get('https://1001albumsgenerator.com/api/v1/projects/tacomanjoe').subscribe((data: any) => {
      if (data && data.history) {
        this.albumCount = data.history.length;
        for (let i = 1; i < 11; i++) {
          const index = data.history.length - i;
          let album = new Album();
          album.title = this.shortString(data.history[index].album.name);
          album.artist = this.shortString(data.history[index].album.artist);
          album.year = data.history[index].album.releaseDate;
          album.myRating = data.history[index].rating;
          album.globalRating = data.history[index].globalRating;
          this.albums.push(album);
        }
      }
    })
  }

  shortString(str: string) {
    if (str.length > 35) {
      return str.substring(0, 32) + '...';
    }
    return str;
  }
}

class Album {
  title?: string;
  artist?: string;
  year?: number;
  myRating?: number;
  globalRating?: number;
}
