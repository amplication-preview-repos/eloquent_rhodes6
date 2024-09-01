import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradingPositionService } from "./tradingPosition.service";
import { TradingPositionControllerBase } from "./base/tradingPosition.controller.base";

@swagger.ApiTags("tradingPositions")
@common.Controller("tradingPositions")
export class TradingPositionController extends TradingPositionControllerBase {
  constructor(protected readonly service: TradingPositionService) {
    super(service);
  }
}
