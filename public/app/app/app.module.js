import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [BrowserModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=app.module.js.map