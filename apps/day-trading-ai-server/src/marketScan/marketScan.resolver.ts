import * as graphql from "@nestjs/graphql";
import { MarketScanResolverBase } from "./base/marketScan.resolver.base";
import { MarketScan } from "./base/MarketScan";
import { MarketScanService } from "./marketScan.service";

@graphql.Resolver(() => MarketScan)
export class MarketScanResolver extends MarketScanResolverBase {
  constructor(protected readonly service: MarketScanService) {
    super(service);
  }
}
