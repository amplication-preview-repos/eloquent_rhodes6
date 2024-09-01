import { Module } from "@nestjs/common";
import { ChartDescriptionModuleBase } from "./base/chartDescription.module.base";
import { ChartDescriptionService } from "./chartDescription.service";
import { ChartDescriptionController } from "./chartDescription.controller";
import { ChartDescriptionResolver } from "./chartDescription.resolver";

@Module({
  imports: [ChartDescriptionModuleBase],
  controllers: [ChartDescriptionController],
  providers: [ChartDescriptionService, ChartDescriptionResolver],
  exports: [ChartDescriptionService],
})
export class ChartDescriptionModule {}
