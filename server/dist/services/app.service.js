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
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const link_repo_1 = require("../database/repos/link.repo");
const mongoose_1 = require("mongoose");
const transformer_service_1 = require("./transformer.service");
const usage_repo_1 = require("../database/repos/usage.repo");
const HOME_PAGE = 'http://localhost:3000';
const MILLISECONDS_IN_A_DAY = 86400000;
let AppService = AppService_1 = class AppService {
    constructor(linkRepository, usageRepository, transformer) {
        this.linkRepository = linkRepository;
        this.usageRepository = usageRepository;
        this.transformer = transformer;
        this.logger = new common_1.Logger(AppService_1.name);
    }
    async generateTinyUrl(dto) {
        const doc = await this.linkRepository.findOne({ longUrl: dto.url });
        if (doc)
            return doc;
        const _id = new mongoose_1.Types.ObjectId();
        return this.linkRepository.create({
            _id,
            shortUrl: this.transformer.hexToBase62(_id),
            longUrl: dto.url,
        });
    }
    async redirectTo(shortUrl) {
        this.logger.log(`param: ${shortUrl}`);
        const doc = await this.linkRepository.findOne({ shortUrl });
        if (doc) {
            await this.usageRepository.create({
                timestamp: Date.now(),
                url: doc.longUrl,
            });
            this.logger.log(`Redirecting to: ${doc.longUrl}`);
            return { url: doc.longUrl, statusCode: 302 };
        }
        else {
            await this.usageRepository.create({
                timestamp: Date.now(),
                url: HOME_PAGE,
            });
            this.logger.log(`Redirecting to: ${HOME_PAGE}`);
            return { url: HOME_PAGE, statusCode: 302 };
        }
    }
    async popularLinks() {
        const dayAgo = Date.now() - MILLISECONDS_IN_A_DAY;
        const usages = await this.usageRepository.find({
            timestamp: { $gt: dayAgo },
        });
        const count = usages.reduce((acc, { url }) => {
            if (url in acc) {
                acc[url]++;
            }
            else {
                acc[url] = 1;
            }
            return acc;
        }, {});
        console.log(count);
        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .map((item) => ({
            url: item[0],
            times: item[1],
        }));
    }
};
exports.AppService = AppService;
exports.AppService = AppService = AppService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [link_repo_1.LinkRepository,
        usage_repo_1.UsageRepository,
        transformer_service_1.TransformerService])
], AppService);
//# sourceMappingURL=app.service.js.map