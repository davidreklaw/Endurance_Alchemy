import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaceCalculatorService } from './services/pace-calculator.service';
import { PaceCalculatorPaceRequest } from './services/api-data-contracts/pace-calculator-pace/pace-calculator-pace-request';
import { PaceCalculator } from './store/model/pace-calculator.model';

@Component({
  selector: 'app-pace-calculator',
  templateUrl: './pace-calculator.component.html',
  styleUrls: ['./pace-calculator.component.scss']
})
export class PaceCalculatorComponent implements OnInit {
  form: FormGroup;
  timeHour = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  timeMinute = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  timeSecond = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  distance = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  distanceType = new FormControl({value: '', disabled: true});
  paceHour = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  paceMinute = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  paceSecond = new FormControl({value: '', disabled: true}, [Validators.min(0)]);
  paceType = new FormControl({value: '', disabled: true});

  constructor(
    private formBuilder: FormBuilder,
    private service: PaceCalculatorService
  ) { }

  ngOnInit() {
    this.form = this.initForm();
  }

  initForm() {
    const form = {
      timeHour: this.timeHour,
      timeMinute: this.timeMinute,
      timeSecond: this.timeSecond,
      distance: this.distance,
      distanceType: this.distanceType,
      paceHour: this.paceHour,
      paceMinute: this.paceMinute,
      paceSecond: this.paceSecond,
      paceType: this.paceType
    }
    return this.formBuilder.group(form);
  }

  calculate() {
    var value = {
      timeHour: this.timeHour,
      timeMinute: this.timeMinute,
      timeSecond: this.timeSecond,
      distance: this.distance,
      distanceType: this.distanceType,
      paceHour: this.paceHour,
      paceMinute: this.paceMinute,
      paceSecond: this.paceSecond,
      paceType: this.paceType
    }

    if (this.paceHour.value == null) {
      this.service.calculatePace(new PaceCalculator()).subscribe();
    }
    else {
      this.service.calculateTime(new PaceCalculator()).subscribe();
    }
  }
}
