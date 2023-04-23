import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualTariffType } from '@electricity-tariffs/electricity-tariffs-types';

@Component({
  selector: 'electricity-tariffs-tariffs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariffs-list.component.html',
  styleUrls: ['./tariffs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffsListComponent {
  @Input() tariffs: AnnualTariffType[] | null = []
}
