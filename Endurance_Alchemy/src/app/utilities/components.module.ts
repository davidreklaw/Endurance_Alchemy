import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    declarations: [

    ],
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule
    ],
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule
    ]
})

export class UtilityComponentsModule {
    
}