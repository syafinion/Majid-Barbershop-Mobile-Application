import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/user.mode';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})


export class BookingService {

  cart = new BehaviorSubject({});
  productsCollection: AngularFirestoreCollection;
  cartKey = null;
  user = {} as User;
  uid: any;
  

  constructor(private firestore: AngularFirestore, private authService: AuthService, private afAuth:AngularFireAuth,
    private afStore: AngularFirestore) {
    this.productsCollection = this.firestore.collection('booking');
    
   }

   async getInfo() {
    this.uid = (await this.afAuth.currentUser).uid;

    this.afStore
      .doc(( "Customers/" + this.uid))
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.name=data['name'];
      });
  }

   async createBooking(post) {
    const booking = this.firestore.collection("booking").add({
      name: post,
      userId: this.uid,
    });
    
    
    //this is to add the id into the document 
    const orderId = (await booking).id
      await this.firestore.collection('booking').doc(orderId).update({
        order_id: orderId
      });

      console.log("added to booking collection ");

   }

}
