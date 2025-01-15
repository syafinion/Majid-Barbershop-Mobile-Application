import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { ScrollDetail } from '@ionic/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.page.html',
  styleUrls: ['./search-booking.page.scss'],
})
export class SearchBookingPage implements OnInit {
  searchTerm: any;
  bookingList: any = [];
  showToolbar = false;
  constructor(
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private firestoreService: FirestoreService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

 async ngOnInit() {
    this.firestore.collection('booking').valueChanges()
      .subscribe(val => console.log(val));
    this.bookingList = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const bookingList = await this.firestore.collection('booking')
      .valueChanges()
      .pipe(first())
      .toPromise();

    return bookingList;
  }

  async filterList(evt) {
    this.bookingList = await this.initializeItems();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.bookingList = this.bookingList.filter(book => {
      if ((book.pickTime && searchTerm) || (book.userName && searchTerm) || (book.services && searchTerm)) {
        return (book.pickTime.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || book.userName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || book.services.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
