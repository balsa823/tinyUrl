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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./services/app.service");
const interfaces_1 = require("./types/interfaces");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    generate(dto) {
        return this.appService.generateTinyUrl(dto);
    }
    popularLinks() {
        return this.appService.popularLinks();
    }
    redirect(params) {
        return this.appService.redirectTo(params.url);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('/generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interfaces_1.DTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)('/popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "popularLinks", null);
__decorate([
    (0, common_1.Get)(':url'),
    (0, common_1.Redirect)('https://docs.nestjs.com', 302),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "redirect", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('/api/v1'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map