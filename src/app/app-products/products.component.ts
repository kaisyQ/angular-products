import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";

import { IProduct } from "./product-type";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: [],
    providers: [HttpService]
})
export class Products implements OnInit {

    constructor(private httpTService: HttpService) { }

    products: IProduct[] = []

    ngOnInit(): void {
        this.httpTService.get().subscribe(value => {
           this.products = value
        })
    }
}