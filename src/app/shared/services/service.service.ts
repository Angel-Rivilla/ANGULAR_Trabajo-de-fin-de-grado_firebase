import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {ServiceInterface} from './services'
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
  getAllService():Observable<ServiceInterface[]>{
    this.services = this.serviceCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ServiceInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.services;

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

  updateService(service: ServiceInterface){
    this.serviceDoc = this.afs.doc(`recetas/${service.id}`);
    this.serviceDoc.update(service);
  }
  deleteService(service: ServiceInterface){
    this.serviceDoc = this.afs.doc(`recetas/${service.id}`);
    this.serviceDoc.delete();
  }

}
