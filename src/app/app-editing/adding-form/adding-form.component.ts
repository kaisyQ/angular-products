import { Component } from "@angular/core";

import { ICreateProduct } from "src/app/global-types/create-product.type";

import { FormService } from "src/app/services/forms.service";
import { HttpService } from "src/app/services/http.service";


@Component({
    selector: 'app-addingForm',
    templateUrl: './adding-form.component.html',
    styleUrls: ['./adding-form.component.scss'],
    providers: [FormService, HttpService]
})
export class AddingForm {

    constructor(private formService: FormService, private httpService: HttpService) { }

    arrOfInputs = this.formService.getAddFrmInptDt()
    arrOfResSbmt = new Array<string>(this.arrOfInputs.length)
    
    sbmtForm(ev : Event) : void {
        const productToCreate: ICreateProduct = {
            title: this.arrOfResSbmt[0],
            price: parseFloat(this.arrOfResSbmt[1]),
            description: this.arrOfResSbmt[2],
            image: this.arrOfResSbmt[3],
            category: this.arrOfResSbmt[4]
        }
        this.httpService.post(productToCreate).subscribe(res => {
            console.log(res)
        })
        
    }
}