System.register(['angular2/core', 'angular2/router', './inner.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, inner_component_1;
    var ApplicationLayout;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (inner_component_1_1) {
                inner_component_1 = inner_component_1_1;
            }],
        execute: function() {
            ApplicationLayout = (function () {
                function ApplicationLayout() {
                }
                ApplicationLayout = __decorate([
                    core_1.Component({
                        template: "\n    <h1>Application Layout</h1>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/inner', name: 'Inner', component: inner_component_1.InnerComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ApplicationLayout);
                return ApplicationLayout;
            })();
            exports_1("ApplicationLayout", ApplicationLayout);
        }
    }
});
//# sourceMappingURL=application-layout.component.js.map