import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChartDescriptionService } from "./chartDescription.service";
import { ChartDescriptionControllerBase } from "./base/chartDescription.controller.base";

@swagger.ApiTags("chartDescriptions")
@common.Controller("chartDescriptions")
export class ChartDescriptionController extends ChartDescriptionControllerBase {
  constructor(protected readonly service: ChartDescriptionService) {
    super(service);
  }
}
