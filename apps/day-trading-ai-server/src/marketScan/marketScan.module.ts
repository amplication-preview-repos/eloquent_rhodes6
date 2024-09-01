import { Module } from "@nestjs/common";
import { MarketScanModuleBase } from "./base/marketScan.module.base";
import { MarketScanService } from "./marketScan.service";
import { MarketScanController } from "./marketScan.controller";
import { MarketScanResolver } from "./marketScan.resolver";

@Module({
  imports: [MarketScanModuleBase],
  controllers: [MarketScanController],
  providers: [MarketScanService, MarketScanResolver],
  exports: [MarketScanService],
})
export class MarketScanModule {}
