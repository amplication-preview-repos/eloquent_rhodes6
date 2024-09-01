import * as graphql from "@nestjs/graphql";
import { TradingScenarioResolverBase } from "./base/tradingScenario.resolver.base";
import { TradingScenario } from "./base/TradingScenario";
import { TradingScenarioService } from "./tradingScenario.service";

@graphql.Resolver(() => TradingScenario)
export class TradingScenarioResolver extends TradingScenarioResolverBase {
  constructor(protected readonly service: TradingScenarioService) {
    super(service);
  }
}
