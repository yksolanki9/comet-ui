import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: DateInputComponent,
  }]
})
export class DateInputComponent implements OnInit, ControlValueAccessor {

  @Input() class: string;

  @Input() value: string;

  @Input() isEditMode: boolean;

  maxDate: string;

  constructor(
    private popoverController: PopoverController,
    private datePipe: DatePipe,
  ) { }

  onChange = (value: string) => {};

  ngOnInit() {
    this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  dateSelected(event) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.popoverController.dismiss();
  }
}
