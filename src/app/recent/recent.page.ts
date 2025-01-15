import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.mode';
import { Post } from '../models/posts.mode';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-recent',
  templateUrl: './recent.page.html',
  styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {
  post = {} as Post;
  uid: any;
  posts: any;
  comp: any;
  user = {} as User;
  bookingCollection: AngularFirestoreCollection;
  public booking : Observable<any[]>;
  public book : Observable<any[]>;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private afAuth:AngularFireAuth,
    private afStore: AngularFirestore,
    private afs:AngularFirestore,
    private authService:AuthService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
    
  ) {
    this.bookingCollection = this.afs.collection('booking');
   }

  ngOnInit() {
    this.booking = this.afs.collection('booking').valueChanges( { idField: 'order_id'});
    console.log(this.booking)

    this.getInfo();
    this.getBooking();
    this.getCompleted();
  }

  async getInfo() {
    this.uid = (await this.afAuth.currentUser).uid;

    this.afStore
      .doc(( "Customers/" + this.uid))
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.displayName=data['name'];
      });
  }

  async getBooking(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection('booking', ref => ref.where('user_id', '==', this.authService.userData.uid).where('book_status', '==', 'Ongoing'))
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          userName: e.payload.doc.data()["userName"],
          pickDate: e.payload.doc.data()["pickDate"],
          pickTime: e.payload.doc.data()["pickTime"],
          services: e.payload.doc.data()["services"],
          book_status: e.payload.doc.data()["book_status"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

  async getCompleted(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection('booking', ref => ref.where('user_id', '==', this.authService.userData.uid).where('book_status', '==', 'Completed'))
    .snapshotChanges()
    .subscribe(data => { 
      this.comp = data.map(e => {
        return {
          id: e.payload.doc.id,
          userName: e.payload.doc.data()["userName"],
          pickDate: e.payload.doc.data()["pickDate"],
          pickTime: e.payload.doc.data()["pickTime"],
          services: e.payload.doc.data()["services"],
          book_status: e.payload.doc.data()["book_status"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }


  async deletePost(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Creating...",
      spinner: 'lines',
      cssClass: 'custom-loader-class'
    });
    (await loader).present();

      this.alertCtrl.create({
        header: 'Confirmation!',
        message: 'Are you sure you want to cancel your booking?',
        buttons: [  
          {
            text: 'Yes',
            handler: () => {
              this.firestore.doc("booking/" + id).delete();
              this.navCtrl.navigateRoot("/recent");
              this.showToast("Booking Deleted");
            }
          },
          {
            text: 'Cancel',
            handler: () => {
            }
          }
        ]
      }).then(res => {
        res.present();
      });
      (await loader).dismiss();
    }

    showToast (message:string){
      this.toastCtrl.create({
        message: message,
        duration: 3000,
        color:'danger'
      }).then(toastData => toastData.present());
    }
  

  }



