import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class TransformerService {
  private readonly base62Chars: string =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  hexToBase62(_id: Types.ObjectId): string {
    let decimalValue = parseInt(_id.toHexString(), 16);
    let base62String = '';

    while (decimalValue > 0) {
      const remainder = decimalValue % 62;
      base62String = this.base62Chars[remainder] + base62String;
      decimalValue = Math.floor(decimalValue / 62);
    }

    return base62String;
  }
}
