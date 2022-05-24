import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    declarations: [

    ],
    imports: [
        MatFormFieldModule,
        MatTableModule
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule
    ]
})

export class UtilityComponentsModule {
    
}