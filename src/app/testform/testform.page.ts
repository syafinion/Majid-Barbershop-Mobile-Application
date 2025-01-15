import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-testform',
  templateUrl: './testform.page.html',
  styleUrls: ['./testform.page.scss'],
})
export class TestformPage implements OnInit {

  public createSongForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  private firestoreService: FirestoreService,
  formBuilder: FormBuilder,
  private router: Router
  ) {
    this.createSongForm = formBuilder.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  

}
