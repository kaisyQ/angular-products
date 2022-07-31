import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductItem } from "./product-item/product-item.component";
import { Products } from "./products.component";

@NgModule({
    declarations: [Products, ProductItem],
    imports: [BrowserModule],
    exports: [Products],
    bootstrap: [Products]
})
export class ProductModule { }