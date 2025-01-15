import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../shared/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  uid: String;
  user = {} as User;

  slideOpts = {
    slidesPerview: 2.2,
  };
   slideOpts1 = {
    slidesPerview: 1.3,
   };
  public categories = [];
  featuredProducts: any[] = [];
  bestSellProducts: any[] = [];



  constructor(
    private data: DataService,
    private afAuth:AngularFireAuth,
    private afStore: AngularFirestore,
    private platform: Platform,
    public router:Router,
    public authService: AuthService,
    public afs: AngularFirestore // Inject Firestore service
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
    this.getInfo();
  }

  async getInfo() {
    //getting current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    console.log(this.uid);

    //getting current user's basic info
    this.afs
      .doc(( "users/" + this.uid))
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.displayName=data['displayName'];
      });
    }

}
