import { Module } from "@nestjs/common";
import { TradingPositionModuleBase } from "./base/tradingPosition.module.base";
import { TradingPositionService } from "./tradingPosition.service";
import { TradingPositionController } from "./tradingPosition.controller";
import { TradingPositionResolver } from "./tradingPosition.resolver";

@Module({
  imports: [TradingPositionModuleBase],
  controllers: [TradingPositionController],
  providers: [TradingPositionService, TradingPositionResolver],
  exports: [TradingPositionService],
})
export class TradingPositionModule {}
