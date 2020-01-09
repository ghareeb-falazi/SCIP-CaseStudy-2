import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatDividerModule, MatChipsModule, MatIconModule } from '@angular/material';
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
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
