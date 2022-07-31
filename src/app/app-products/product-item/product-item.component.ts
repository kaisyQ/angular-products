import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItem { 
    @Input() title!: string
    @Input() description!: string
    @Input() image!: string
    @Input() price!: number

    isDescriptionShowing: boolean = false

    showDescription(ev : Event) : void {
        this.isDescriptionShowing = !this.isDescriptionShowing
    }
}