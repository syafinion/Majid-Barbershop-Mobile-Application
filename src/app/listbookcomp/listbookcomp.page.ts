import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Post } from '../models/posts.mode';
import { Router } from '@angular/router';
import { enterAnimation } from '../nav-animation';

@Component({
  selector: 'app-listbookcomp',
  templateUrl: './listbookcomp.page.html',
  styleUrls: ['./listbookcomp.page.scss'],
})
export class ListbookcompPage implements OnInit {
  post = {} as Post;
  posts: any;
  comp: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private afAuth:AngularFireAuth,
    private afStore: AngularFirestore,
    private afs:AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBooking();
    this.getCompleted();
  }
  onFilterUpdate(event : CustomEvent){
    console.log(event.detail);
 }
 
  async getBooking(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection('booking', ref => ref.where('book_status', '==', 'Ongoing'))
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          userName: e.payload.doc.data()["userName"],
          pickDate: e.payload.doc.data()["pickDate"],
          pickTime: e.payload.doc.data()["pickTime"],
          services: e.payload.doc.data()["services"],
          book_status: e.payload.doc.data()["book_status"],
          user_id: e.payload.doc.data()["user_id"]
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
    .collection('booking', ref => ref.where('book_status', '==', 'Completed'))
    .snapshotChanges()
    .subscribe(data => { 
      this.comp = data.map(e => {
        return {
          id: e.payload.doc.id,
          userName: e.payload.doc.data()["userName"],
          pickDate: e.payload.doc.data()["pickDate"],
          pickTime: e.payload.doc.data()["pickTime"],
          services: e.payload.doc.data()["services"],
          book_status: e.payload.doc.data()["book_status"],
          user_id: e.payload.doc.data()["user_id"],
          user_email: e.payload.doc.data()["user_email"]
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
        message: 'Are you sure you want to delete?',
        buttons: [  
          {
            text: 'Yes',
            handler: () => {
              this.firestore.doc("booking/" + id).delete();
              this.navCtrl.navigateRoot("/listbookcomp");
              this.showToast("Order Deleted");
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

  navigateToPage() {
    // Define the animation for the transition!
    this.navCtrl.setDirection('forward', true, 'forward', enterAnimation);
    this.router.navigateByUrl('list-booking');
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}
