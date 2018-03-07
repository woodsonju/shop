import { Injectable } from '@angular/core';
import {Client} from "./model/client";
import {HttpClient} from "@angular/common/http";
import {Product} from "./model/products";
import {Date} from "./model/dates";


@Injectable()
export class Dataservice {

  constructor(public http: HttpClient) {
  }

  fetchClients(): Promise<Client[]> {

    return this.http
      .get('http://localhost:8080/farm-java/api/clients')
      .toPromise()
      .then(data => data as Client[])
  }

  fetchProducts(): Promise<Product[]> {

    return this.http
      .get('http://localhost:8080/farm-java/api/products')
      .toPromise()
      .then(data => data as Product[])
  }

  fetchDates(): Promise<Date[]> {

    return this.http
      .get('http://localhost:8080/farm-java/api/dates')
      .toPromise()
      .then(data => data as Date[])
  }


  ////////
  addToCart(product: Product) {
    let url = ('http://localhost:8080/farm-java/api/commend')
    let dto = {
      product_id: product.id,

    };

    console.log('sending user:', dto);

    return this.http.post(url, dto)
      .toPromise()
      .then(data => console.log('Success :)', data))


  }
}
