import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { HeaderComponent } from 'src/app/shared/components/onboarding/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonsComponent } from 'src/app/shared/components/onboarding/buttons/buttons.component';
import { CardComponent } from 'src/app/shared/components/onboarding/card/card.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { OverviewComponent } from './overview/overview.component';
import { PagesComponent } from './pages/pages.component';
import { CenteredModalWrapperComponent } from 'src/app/shared/components/centered-modal-wrapper/centered-modal-wrapper.component';
import { FormPageComponent } from './form-page/form-page.component';
import { DetailsModalWrapperComponent } from 'src/app/shared/components/details-modal-wrapper/details-modal-wrapper.component';
@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent,
        ButtonsComponent,
        CardComponent,
        TableComponent,
        OverviewComponent,
        PagesComponent,
        CenteredModalWrapperComponent,
        FormPageComponent,
        DetailsModalWrapperComponent
    ],
    imports: [
        CommonModule,
        OnboardingRoutingModule,
        FontAwesomeModule
        // BrowserModule
    ],
    exports: [OnboardingRoutingModule]
})

export class OnboardingModule {}