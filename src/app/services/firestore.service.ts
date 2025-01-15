import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { Post } from '../models/posts.mode';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.mode';
import { AuthService } from '../shared/auth.service';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  uid: any;
  user = {} as User;
  constructor(public firestore: AngularFirestore, private afAuth:AngularFireAuth, private afStore: AngularFirestore, private authService: AuthService, private afs: AngularFirestore) {}


  async getInfo() {
    this.uid = (await this.afAuth.currentUser).uid;
    this.afStore
      .doc(( "users/" + this.uid))
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.displayName=data['name'];
      });
  }

  createSong(
    pickTime: string,
    pickDate: string,
    services: string,
    userName: string,
  ): Promise<void> {
    const id = this.firestore.createId();
  
    return this.firestore.doc(`booking/${id}`).set({
      id,
      pickTime,
      pickDate,
      services,
      userName,
      user_id: this.authService.userData.uid,
      user_email: this.authService.userData.email,
      book_status: "Ongoing"
    });

    
  }
  

  getSongList(): Observable<Post[]> {
    return this.firestore.collection<Post>(`booking`).valueChanges();
  }
  
  
}

