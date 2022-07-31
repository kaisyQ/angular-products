import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICreateProduct } from "../global-types/create-product.type";


@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    baseURl: string = 'https://fakestoreapi.com/'
    
    public get() : Observable<any> {
        return this.httpClient.get(`${this.baseURl}products`)
    }
    
    public post(productToCreate: ICreateProduct) : Observable<any> {
        return this.httpClient.post(`${this.baseURl}products`, productToCreate)
    }
}