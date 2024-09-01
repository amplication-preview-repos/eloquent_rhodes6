import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketScanServiceBase } from "./base/marketScan.service.base";

@Injectable()
export class MarketScanService extends MarketScanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
