import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search-cust',
  templateUrl: './search-cust.page.html',
  styleUrls: ['./search-cust.page.scss'],
})
export class SearchCustPage implements OnInit {
  
  sampleArr = [];
  resultArr = [];
  searchKey: string
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    
}

  search(event) {
    let searchKey = event.target.value;
    let firstLetter = searchKey.toUpperCase();

    if(searchKey.length==0){
      this.sampleArr=[];
      this.resultArr=[];
    }

    if (this.sampleArr.length == 0) {
      this.firestore
    .collection('users', ref => ref.where('displayName', '==', firstLetter)).snapshotChanges()
      .subscribe(data => {
        data.forEach(childData => {
          this.sampleArr.push(childData.payload.doc.data())
        })
      })
    }
    else{
      this.resultArr=[];
      this.sampleArr.forEach(val=>{
        let name:string=val['displayName'];
        if(name.toUpperCase().startsWith(searchKey.toUpperCase())){
          if(true){
            this.resultArr.push(val);
          }
        }
      })
    }
  }
}
