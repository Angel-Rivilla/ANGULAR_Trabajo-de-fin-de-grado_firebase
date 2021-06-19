import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Product } from 'src/app/shared/services/products';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  items: Product[] = [];
  
  products: Observable<Product[]> | undefined;

  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient, private readonly afs: AngularFirestore) { 
    this.productsCollection = afs.collection<Product> ('products');
    this.getProducts();
    console.log(this.items);
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  deleteItem(product: Product){
    const eliminar = this.items.findIndex(p => p.id === product.id); 
    this.items.splice(eliminar, 1);
  }


  onDeleteProduct(productId: string): Promise<void> {
    return new Promise(async(resolve,reject)=>{
      try{
        const result = this.productsCollection?.doc(productId).delete();
        resolve(result);

      } catch(err){
        reject(err.message);
      }
    });

  }

  onSaveProduct(product: Product, productId: string, emailUser: string): Promise<void>{
    return new Promise(async(resolve,reject)=>{
      try{
        
        const id = productId || this.afs.createId();
        const data = {id , ...product , emailUser};
        const result = await this.productsCollection?.doc(id).set(data);
        resolve(result);

      } catch(err){
        reject(err.message);
      }
    });
  }


  private getProducts(): void{
    this.products = this.productsCollection?.snapshotChanges().pipe(
      map(actions => actions.map(a=> a.payload.doc.data() as Product))
    );
  }

}