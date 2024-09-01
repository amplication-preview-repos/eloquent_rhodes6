import * as graphql from "@nestjs/graphql";
import { TradingPositionResolverBase } from "./base/tradingPosition.resolver.base";
import { TradingPosition } from "./base/TradingPosition";
import { TradingPositionService } from "./tradingPosition.service";

@graphql.Resolver(() => TradingPosition)
export class TradingPositionResolver extends TradingPositionResolverBase {
  constructor(protected readonly service: TradingPositionService) {
    super(service);
  }
}
