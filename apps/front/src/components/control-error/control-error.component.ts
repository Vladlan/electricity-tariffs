import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'electricity-tariffs-control-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  @Input() control!: AbstractControl;
  @Input() errorsMap!: Record<string, string>;

  get errorText() {
    const errKeys = Object.keys(this.control.errors || {});
    if (errKeys.length) {
      return this.errorsMap[errKeys[0]] || '';
    }
    return '';
  }
}
