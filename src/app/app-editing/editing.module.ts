import { NgModule } from "@angular/core";

import { EditingComponent } from "./editing.component";
import { AddingFormModule } from "./adding-form/additing-form.module";

@NgModule({
    declarations: [EditingComponent],
    exports: [EditingComponent],
    imports: [AddingFormModule]
})
export class EditingModule { }