import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, NavController, AlertController } from '@ionic/angular';
import { User } from '../models/user.mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-admin',
  templateUrl: './log-admin.page.html',
  styleUrls: ['./log-admin.page.scss'],
})
export class LogAdminPage implements OnInit {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    public ngZone: NgZone,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    public router: Router
  ) { }

  ngOnInit() {
  }


  //admin sign in
  async AdminSignIn(adminEmail: string, adminPassword: string){
    if (adminEmail == "majidbarbershop@gmail.com" && adminPassword == "admin1234" ) {
      try { this.afAuth
      .signInWithEmailAndPassword(adminEmail, adminPassword)
      .then((result) => {
        this.ngZone.run(async () => {

          let loader = this.loadingCtrl.create({
            message: "Sign in successful"
            });
            (await loader).present();
            //dismiss loader
            (await loader).dismiss();
            
          this.router.navigate(['welcome-admin']);
          this.showToast("You are now logged in");
        });
      })
 
      }
      catch (e) {
        this.showToast(e);
      }
    }
}

showToast (message:string){
  this.toastCtrl.create({
    message: message,
    duration: 3000,
    color:'success'
  }).then(toastData => toastData.present());
}
}
