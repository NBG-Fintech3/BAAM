import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { PricingModelComponent } from './pricing-model/pricing-model.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BotPageComponent } from './bot-page/bot-page.component';
import { EntirePageLoaderComponent } from './entire-page-loader/entire-page-loader.component';
import { ContractsService } from './services/contracts/contracts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AssetsComponent } from './apt-assets/all-assets-container/assets.component';
import { AssetComponent } from './apt-assets/asset-preview/asset.component';
import { SearchResultsComponent } from './apt-assets/filtered-assets/search-results.component';
import { InspectDocComponent } from './admin/inspect-doc/inspect-doc.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        FooterComponent,
        CartComponent,
        AssetsComponent,
        HeaderComponent,
        SearchResultsComponent,
        AssetComponent,
        PricingModelComponent,
        CheckoutComponent,
        BotPageComponent,
        EntirePageLoaderComponent,
        AdminLoginComponent,
        AdminDashboardComponent,
        InspectDocComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'assets', component: AssetsComponent, data: { breadcrumb: 'Assets' } },
            { path: 'assets/assetId', component: AssetComponent, data: { breadcrumb: 'AssetId' } },
            { path: 'admin/login', component: AdminLoginComponent },
            { path: 'admin', component: AdminDashboardComponent },
            { path: 'admin/inspect', component: InspectDocComponent },
            { path: 'cart', component: CartComponent, data: { breadcrumb: 'Pricing Model' } },
            { path: 'pricing', component: PricingModelComponent, data: { breadcrumb: 'Cart' } },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'ai', component: BotPageComponent },
            { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ],
            {
                useHash: true
            }
        )
    ],
    providers: [
        ContractsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
