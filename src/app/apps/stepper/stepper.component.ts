import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';

@Component({
    selector: 'app-stepper-component',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, StepperModule, InputTextModule, ButtonModule],
    templateUrl: 'stepper.component.html',
    styleUrls: ['stepper.component.scss']
})
export class StepperComponent {
    private readonly fb = inject(FormBuilder);

    step = 1;

    readonly firstForm = this.fb.group({
        first: ['', Validators.required]
    });

    readonly secondForm = this.fb.group({
        second: ['', Validators.required]
    });

    goTo(activateCallback: (index: number) => void, nextStep: number): void {
        activateCallback(nextStep);
    }

    confirm(): void {
        console.log('[Stepper] confirmed', { ...this.firstForm.value, ...this.secondForm.value });
    }
}
