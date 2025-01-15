import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/posts.mode';


@Component({
  selector: 'app-edit-booking-admin',
  templateUrl: './edit-booking-admin.page.html',
  styleUrls: ['./edit-booking-admin.page.scss'],
})
export class EditBookingAdminPage implements OnInit {
  post = {} as Post;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController
    ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }


  ngOnInit() {
    this.getBookingById(this.id);
  }

  async getBookingById(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
   
    this.firestore.doc("booking/" + id)
    .valueChanges()
    .subscribe(data => {
      this.post.userName = data["userName"];
      this.post.pickTime = data["pickTime"];
      this.post.pickDate = data["pickDate"];
      this.post.services = data["services"];
    });
    //dismiss loader
    (await loader).dismiss();
    }
   
    async updateBooking(post: Post){
      if(this.formValidation()) {
        //show loader
        let loader = this.loadingCtrl.create({
        message: "Please wait..."
        });
        (await loader).present();
    
        this.alertCtrl.create({
          header: 'Alert!',
          message: 'Are you sure the information submitted is correct?',
          buttons: [  
            {
              text: 'Yes',
              handler: () => {
                this.firestore.doc("booking/" + this.id).update(post);
                this.navCtrl.navigateRoot("/list-booking");
                this.showToast("Booking Updated!");
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

        //dismiss loader
        (await loader).dismiss();
        }
    }
   
    formValidation(){
      if(!this.post.userName){
        this.showToast("Enter username");
        return false;
      }
   
      if(!this.post.pickTime){
        this.showToast("Enter your time");
        return false;
      }
   
      if(!this.post.pickDate){
        this.showToast("Enter your date");
        return false;
      }
   
      if(!this.post.services){
        this.showToast("Enter services");
        return false;
      }
   
      return true;
    }
   
    showToast (message:string){
      this.toastCtrl.create({
        message: message,
        duration: 3000,
        color: 'success'
      })
      .then(toastData => toastData.present());
    }
  
}
