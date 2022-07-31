import { Injectable } from "@angular/core";


interface IInputDt {
    title: string,
    placeholder: string
}

@Injectable()
export class FormService {
    constructor( ) { }
    private _arrOfAddingForm: IInputDt[] = [
        {
            title: 'title',
            placeholder: 'enter title'
        },
        {
            title: 'price',
            placeholder: 'enter price'
        },
        {
            title: 'description',
            placeholder: 'enter description'
        },
        {
            title: 'image',
            placeholder: 'enter imageURL'
        },
        {
            title: 'category',
            placeholder: 'enter category'
        }
    ]

    getAddFrmInptDt() {
        return this._arrOfAddingForm
    }
} 