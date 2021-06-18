import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TrackHttpError } from 'src/app/shared/services/trackHttpError'
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,ParamMap, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services: Observable<ServiceInterface[]> | undefined;

  servicesNew: ServiceInterface[] = [];

  private servicesCollection: AngularFirestoreCollection<ServiceInterface>;

  private pageNum = 1;

  private query: string | undefined;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;


  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient, private readonly afs: AngularFirestore) { 
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

  onSaveService(service: ServiceInterface, serviceId: string, emailUser: string): Promise<void>{
    return new Promise(async(resolve,reject)=>{
      try{
        
        const id = serviceId || this.afs.createId();
        const data = {id , ...service , emailUser};
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

  searchCharacters(query = '', page = 1):Observable<ServiceInterface[] | TrackHttpError> {
    const filter = `${environment}/?name=${query}&page=${page}`;
    return this.http.get<ServiceInterface[]>(filter)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }
  
  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }

  private getDataFromService(): void {
    this.searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.servicesNew = [...this.servicesNew, ...results];
        } else {
          this.servicesNew = [];
        }
      }, (error:TrackHttpError) => console.log((error.friendlyMessage)));
  }

 

}
