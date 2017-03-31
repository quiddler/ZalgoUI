import { Component, Input } from "@angular/core";

@Component({
    selector: "zalgo-card",
    //styleUrls: ['./card.scss'],
    template: `
        <section class="main-section">
            <h2 class="main-section-header">{{title}}</h2>
            <div class="level-one-box min-gear-height">

                <!-- Loading -->
                <section class="sub-section full-width" *ngIf="dependencyStatus === 'loading'">
                    <h3 class="hero-text centered full-width">
                        <i class="fa fa-cog spin-forward fa-3x fa-fw level-one-text"></i>
                        <i class="fa fa-cog spin-reverse fa-3x fa-fw level-two-text squished"></i>
                        <i class="fa fa-cog spin-forward fa-3x fa-fw level-one-text"></i>
                        <span class="sr-only">Loading...</span>
                    </h3>                    
                </section>

                <!-- Error -->
                <section class="sub-section full-width" *ngIf="dependencyStatus === 'error'">
                    <h3 class="hero-text centered full-width res-error">
                        An Error Has Occurred.<br/>Sorry about that...
                    </h3>                    
                </section>
                
                <!-- Success -->
                <ng-content *ngIf="dependencyStatus === 'success'"></ng-content>
            </div>
        </section>
    `
})

export class ZalgoCardComponent {
    @Input() title: string;
    @Input() dependencyStatus: string;
}