import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { Song } from '../models/song.interface';



@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.page.html',
  styleUrls: ['./songlist.page.scss'],
})
export class SonglistPage implements OnInit {
  public songList: Observable<Song[]>;
  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
  }
  

}
