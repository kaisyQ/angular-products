import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormItem } from "../editing-form-item/form-item.component";
import { AddingForm } from "./adding-form.component";


@NgModule({
    declarations: [AddingForm, FormItem],
    imports: [BrowserModule],
    exports: [AddingForm]
})
export class AddingFormModule { }