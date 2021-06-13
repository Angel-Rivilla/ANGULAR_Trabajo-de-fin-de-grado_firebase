import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {ServiceInterface} from './services.interface'
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
serviceCollection: AngularFirestoreCollection<ServiceInterface>;
serviceDoc: AngularFirestoreDocument<ServiceInterface>;
services:Observable<ServiceInterface[]> | null | undefined;
service:Observable<ServiceInterface> | null | undefined;

  constructor(private afs: AngularFirestore) {
    this.serviceCollection = this.afs.collection('services', ref=> ref);
    this.serviceDoc = this.afs.doc('doc');
   }
  addNewService(service: ServiceInterface){
    this.serviceCollection.add(service);

  }
  
  
 /* getOneService(idService: string){
    this.serviceDoc = this.afs.doc<ServiceInterface>(`services/${idService}`);
    this.service = this.serviceDoc.snapshotChanges().pipe(map(action=>{
      if(action.payload.exists == true){
        const data = action.payload.data() as ServiceInterface;
        data.id = action.payload.id;
        return data;
      }else{
        return null;
      }
    }));
  }*/

  

}
