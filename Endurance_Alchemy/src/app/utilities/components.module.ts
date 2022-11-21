import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [

    ],
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatDialogModule
    ],
    exports: [
        BrowserAnimationsModule,
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule
    ]
})

export class UtilityComponentsModule {
    
}