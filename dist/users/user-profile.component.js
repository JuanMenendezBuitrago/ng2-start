"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var User_1 = require("../shared/models/User");
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    return UserProfileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", User_1.User)
], UserProfileComponent.prototype, "user", void 0);
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        template: "\n\t    <div class=\"jumbotron\" *ngIf=\"user\">\n\t      <h1>{{ user.name }} <small>{{ user.username }}</small></h1>\n\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\"/>\t\t   \n\t    </div>\n\t    "
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map