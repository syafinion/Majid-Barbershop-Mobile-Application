import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { User } from '../models/user.mode';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  uid: any;
  user = {} as User;
  userId: string;
  public createSongForm: FormGroup;

  constructor(
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  private toastCtrl: ToastController,
  private firestoreService: FirestoreService,
  formBuilder: FormBuilder,
  private router: Router,
  private afAuth:AngularFireAuth,
  private afStore: AngularFirestore 
  ) {
    this.createSongForm = formBuilder.group({
      pickTime: ['', Validators.required],
      pickDate: ['', Validators.required],
      services: ['', Validators.required],
      userName: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async getInfo() {
    this.uid = (await this.afAuth.currentUser).uid;
    this.afStore
      .doc(( "users/" + this.uid))
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.displayName=data['name'];
        this.user.uid=data['uid'];
      });
  }

  async createSong() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Thanks For Booking',
      buttons: ['Track Your Booking']
      
    });
    const loading = await this.loadingCtrl.create();
  
    const pickTime = this.createSongForm.value.pickTime;
    const pickDate = this.createSongForm.value.pickDate;
    const services = this.createSongForm.value.services;
    const userName = this.createSongForm.value.userName;
    this.alertCtrl.create({
      header: 'Confirm Booking',
      message: 'Are you sure the information you submitted is correct?',
      buttons: [  
        {
          text: 'Yes',
          handler: () => {
            this.firestoreService
      .createSong(pickTime, pickDate, services, userName)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.router.navigateByUrl('/recent');
            alert.present();
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
          });
        }
      );
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            this.router.navigate(['/booking']);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
    
  
    
  }

  


  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: 'success'
    }).then(toastData => toastData.present());
   }
}

