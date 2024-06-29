"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./services/app.service");
const mongoose_1 = require("@nestjs/mongoose");
const link_model_1 = require("./database/models/link.model");
const link_repo_1 = require("./database/repos/link.repo");
const transformer_service_1 = require("./services/transformer.service");
const usage_model_1 = require("./database/models/usage.model");
const usage_repo_1 = require("./database/repos/usage.repo");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://database:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1'),
            mongoose_1.MongooseModule.forFeature([{ name: link_model_1.Link.name, schema: link_model_1.LinkSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: usage_model_1.Usage.name, schema: usage_model_1.UsageSchema }]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, link_repo_1.LinkRepository, usage_repo_1.UsageRepository, transformer_service_1.TransformerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map