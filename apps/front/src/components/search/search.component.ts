import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

interface TariffsSearchForm {
  yearConsumption: FormControl<number | null>;
}

@Component({
  selector: 'electricity-tariffs-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  tariffsSearchForm = new FormGroup<TariffsSearchForm>({
    yearConsumption: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  @Output()
  formSubmit = new EventEmitter<number>();

  @Output()
  formReset = new EventEmitter<void>();

  submit() {
    const yearConsumption = this.tariffsSearchForm.value.yearConsumption;
    if (yearConsumption) {
      this.formSubmit.emit(yearConsumption);
    }
  }

  reset() {
    this.tariffsSearchForm.reset();
    this.formReset.emit();
  }
}
