import * as graphql from "@nestjs/graphql";
import { ChartDescriptionResolverBase } from "./base/chartDescription.resolver.base";
import { ChartDescription } from "./base/ChartDescription";
import { ChartDescriptionService } from "./chartDescription.service";

@graphql.Resolver(() => ChartDescription)
export class ChartDescriptionResolver extends ChartDescriptionResolverBase {
  constructor(protected readonly service: ChartDescriptionService) {
    super(service);
  }
}
