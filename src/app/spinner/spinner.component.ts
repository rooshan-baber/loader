import { Component, OnDestroy } from '@angular/core';
import { LoaderService } from '../loader.service';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy {
  public isLoading = false;
  private destroy$ = new Subject<void>();
  private timerSubscription: any;

  constructor(public loader: LoaderService) {}

  // CUSTOM SPINNER
  startLoader() {
    this.loader.showLoader();

    this.timerSubscription = timer(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loader.hideLoader();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
