import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-mission-filter',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {
  @Output() yearChanged = new EventEmitter<string>();

  private readonly fb = inject(FormBuilder);
  readonly years = Array.from({ length: 20 }, (_, i) => String(2006 + i));

  readonly filterForm = this.fb.group({
    launchYear: ['']
  });

  onYearChange(): void {
    this.yearChanged.emit(this.filterForm.value.launchYear ?? '');
  }
}
