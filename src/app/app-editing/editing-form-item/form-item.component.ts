import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'form-item',
    templateUrl: './form-item.component.html',
    styleUrls: ['./form-item.component.scss']
})
export class FormItem { 
    constructor () { }

    @Input() title!: string
    @Input() placeholder!: string 

    @Input() result!: string
    @Output() resultChange = new EventEmitter<string>()

    changeRes(ev: any) : void {
        this.result = ev.target.value
        this.resultChange.emit(this.result)
    }
}