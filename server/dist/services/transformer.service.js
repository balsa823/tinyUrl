"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformerService = void 0;
const common_1 = require("@nestjs/common");
let TransformerService = class TransformerService {
    constructor() {
        this.base62Chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    hexToBase62(_id) {
        let decimalValue = parseInt(_id.toHexString(), 16);
        let base62String = '';
        while (decimalValue > 0) {
            const remainder = decimalValue % 62;
            base62String = this.base62Chars[remainder] + base62String;
            decimalValue = Math.floor(decimalValue / 62);
        }
        return base62String;
    }
};
exports.TransformerService = TransformerService;
exports.TransformerService = TransformerService = __decorate([
    (0, common_1.Injectable)()
], TransformerService);
//# sourceMappingURL=transformer.service.js.map