import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatInput, MatInputModule } from "@angular/material/input"

@NgModule({
    declarations: [

    ],
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule
    ],
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule
    ]
})

export class UtilityComponentsModule {
    
}