import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatDividerModule, MatChipsModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatTableModule
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
    MatTableModule
  ]
})
export class MaterialModule {
}
