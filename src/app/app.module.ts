import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AssetsComponent } from './assets/assets.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AssetComponent } from './asset/asset.component';
import { PricingModelComponent } from './pricing-model/pricing-model.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BotPageComponent } from './bot-page/bot-page.component';
import { EntirePageLoaderComponent } from './entire-page-loader/entire-page-loader.component';
import { ContractsService } from './services/contracts/contracts.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

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
        AdminDashboardComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'assets', component: AssetsComponent, data: { breadcrumb: 'Assets' } },
            { path: 'assets/assetId', component: AssetComponent, data: { breadcrumb: 'AssetId' } },
            { path: 'admin/login', component: AdminLoginComponent },
            { path: 'admin', component: AdminDashboardComponent },
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