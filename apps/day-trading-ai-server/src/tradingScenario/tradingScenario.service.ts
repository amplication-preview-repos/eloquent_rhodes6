import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradingScenarioServiceBase } from "./base/tradingScenario.service.base";

@Injectable()
export class TradingScenarioService extends TradingScenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
