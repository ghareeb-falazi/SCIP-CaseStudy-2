import { NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatDividerModule, MatChipsModule, MatIconModule, MatTableModule, MatSlideToggleModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    NgxGraphModule,
    NgxChartsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    NgxGraphModule,
    NgxChartsModule
  ]
})
export class MaterialModule {
}
