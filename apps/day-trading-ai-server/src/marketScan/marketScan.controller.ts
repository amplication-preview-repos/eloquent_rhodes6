import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketScanService } from "./marketScan.service";
import { MarketScanControllerBase } from "./base/marketScan.controller.base";

@swagger.ApiTags("marketScans")
@common.Controller("marketScans")
export class MarketScanController extends MarketScanControllerBase {
  constructor(protected readonly service: MarketScanService) {
    super(service);
  }
}
