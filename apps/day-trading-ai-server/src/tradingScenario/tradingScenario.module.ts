import { Module } from "@nestjs/common";
import { TradingScenarioModuleBase } from "./base/tradingScenario.module.base";
import { TradingScenarioService } from "./tradingScenario.service";
import { TradingScenarioController } from "./tradingScenario.controller";
import { TradingScenarioResolver } from "./tradingScenario.resolver";

@Module({
  imports: [TradingScenarioModuleBase],
  controllers: [TradingScenarioController],
  providers: [TradingScenarioService, TradingScenarioResolver],
  exports: [TradingScenarioService],
})
export class TradingScenarioModule {}
