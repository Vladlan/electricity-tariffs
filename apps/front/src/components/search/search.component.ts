import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { NgxCurrencyModule } from 'ngx-currency';

interface TariffsSearchForm {
  yearConsumption: FormControl<number | null>;
}

@Component({
  selector: 'electricity-tariffs-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlErrorComponent, NgxCurrencyModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  tariffsSearchForm = new FormGroup<TariffsSearchForm>({
    yearConsumption: new FormControl(null, [
      Validators.required,
      Validators.min(1),
    ]),
  });
  errorsMap = {
    required: 'This field is required',
    min: 'Value must be greater than 0',
  };
  inputMaskConfig = {
    prefix: '',
    align: 'left',
    allowNegative: false,
    allowZero: false,
    precision: 0,
    thousands: ',',
    nullable: false,
    min: 1,
  };

  get yearConsumption() {
    return this.tariffsSearchForm.controls.yearConsumption;
  }

  @Output()
  formSubmit = new EventEmitter<number>();

  @Output()
  formReset = new EventEmitter<void>();

  submit() {
    this.tariffsSearchForm.markAllAsTouched();
    if (this.tariffsSearchForm.invalid) return;
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
