import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services: Observable<ServiceInterface[]> | undefined;

  private servicesCollection: AngularFirestoreCollection<ServiceInterface>;

  constructor(private readonly afs: AngularFirestore) { 
    this.servicesCollection = afs.collection<ServiceInterface> ('services');
    this.getServices();

  }

  onDeleteService(serviceId: string): Promise<void> {
    return new Promise(async(resolve,reject)=>{
      try{
        const result = this.servicesCollection?.doc(serviceId).delete();
        resolve(result);

      } catch(err){
        reject(err.message);
      }
    });

  }

  onSaveService(service: ServiceInterface, serviceId: string): Promise<void>{
    return new Promise(async(resolve,reject)=>{
      try{
        
        const id = serviceId || this.afs.createId();
        const data = {id , ...service };
        const result = await this.servicesCollection?.doc(id).set(data);
        resolve(result);

      } catch(err){
        reject(err.message);
      }
    });
  }

  private getServices(): void{
    this.services = this.servicesCollection?.snapshotChanges().pipe(
      map(actions => actions.map(a=> a.payload.doc.data() as ServiceInterface))
    );
  }

}
