import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradingScenarioService } from "./tradingScenario.service";
import { TradingScenarioControllerBase } from "./base/tradingScenario.controller.base";

@swagger.ApiTags("tradingScenarios")
@common.Controller("tradingScenarios")
export class TradingScenarioController extends TradingScenarioControllerBase {
  constructor(protected readonly service: TradingScenarioService) {
    super(service);
  }
}
