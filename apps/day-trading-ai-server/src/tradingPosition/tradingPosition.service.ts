import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradingPositionServiceBase } from "./base/tradingPosition.service.base";

@Injectable()
export class TradingPositionService extends TradingPositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
