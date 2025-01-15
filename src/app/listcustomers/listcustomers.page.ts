import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-listcustomers',
  templateUrl: './listcustomers.page.html',
  styleUrls: ['./listcustomers.page.scss'],
})
export class ListcustomersPage implements OnInit {
  customers: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore

  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.getCustomers();
  }

  async getCustomers(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("users")
    .snapshotChanges()
    .subscribe(data => { 
      this.customers = data.map(e => {
        return {
          id: e.payload.doc.id,
          displayName: e.payload.doc.data()["displayName"],
          email: e.payload.doc.data()["email"],
          uid: e.payload.doc.data()["uid"],
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
  message: "Please wait..."
  });
  (await loader).present();

  await this.firestore.doc("users/" + id).delete();
  this.showToast("Delete Successful!");
  //dismiss loader
  (await loader).dismiss();
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: 'success'
    }).then(toastData => toastData.present());
  }

  
}
