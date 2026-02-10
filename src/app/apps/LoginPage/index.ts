import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
    template: `
        <div class="card max-w-xl mx-auto">
            <div class="font-semibold text-xl mb-4">Login Page</div>

            <form class="space-y-4" [formGroup]="form" (ngSubmit)="submit()">
                <div class="flex flex-col gap-2">
                    <label for="email" class="font-medium text-surface-700 dark:text-surface-0">Email</label>
                    <input id="email" type="email" pInputText formControlName="email" class="w-full" />
                    <small class="text-red-500" *ngIf="form.controls.email.invalid && (form.controls.email.dirty || form.controls.email.touched)">
                        Enter a valid email
                    </small>
                </div>

                <div class="flex flex-col gap-2">
                    <label for="password" class="font-medium text-surface-700 dark:text-surface-0">Password</label>
                    <input id="password" type="password" pInputText formControlName="password" class="w-full" />
                    <small
                        class="text-red-500"
                        *ngIf="form.controls.password.invalid && (form.controls.password.dirty || form.controls.password.touched)"
                    >
                        Password is required
                    </small>
                </div>

                <div class="flex justify-end">
                    <button pButton type="submit" label="Sign in" [disabled]="form.invalid"></button>
                </div>
            </form>
        </div>
    `
})
export class LoginPage {
    private readonly fb = inject(FormBuilder);

    readonly form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    submit(): void {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        console.log('[LoginPage] submit', this.form.value);
    }
}
