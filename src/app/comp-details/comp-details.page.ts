import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Post } from '../models/posts.mode';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.page.html',
  styleUrls: ['./comp-details.page.scss'],
})
export class CompDetailsPage implements OnInit {
  post = {} as Post;
  id: any;
  constructor(
    private afs:AngularFirestore,
    private actRoute: ActivatedRoute,
    private modalCtrl: ModalController
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.compDetails(this.id);
  }

  async compDetails(id:string){
    this.afs.doc("booking/" + id).valueChanges().subscribe(data => {
      this.post.id = data["id"];
      this.post.userName = data["userName"];
      this.post.pickTime = data["pickTime"];
      this.post.pickDate = data["pickDate"];
      this.post.services = data["services"];
      this.post.user_id = data["user_id"];
    });
    }

    

}
