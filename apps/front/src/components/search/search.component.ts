import { Component } from '@angular/core';
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

  submit(e: Event) {
    console.log('submit e: ', e);
  }

  reset(e: Event) {
    console.log('reset: ', e);
  }
}
