/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChartDescription } from "./ChartDescription";
import { ChartDescriptionCountArgs } from "./ChartDescriptionCountArgs";
import { ChartDescriptionFindManyArgs } from "./ChartDescriptionFindManyArgs";
import { ChartDescriptionFindUniqueArgs } from "./ChartDescriptionFindUniqueArgs";
import { CreateChartDescriptionArgs } from "./CreateChartDescriptionArgs";
import { UpdateChartDescriptionArgs } from "./UpdateChartDescriptionArgs";
import { DeleteChartDescriptionArgs } from "./DeleteChartDescriptionArgs";
import { ChartDescriptionService } from "../chartDescription.service";
@graphql.Resolver(() => ChartDescription)
export class ChartDescriptionResolverBase {
  constructor(protected readonly service: ChartDescriptionService) {}

  async _chartDescriptionsMeta(
    @graphql.Args() args: ChartDescriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChartDescription])
  async chartDescriptions(
    @graphql.Args() args: ChartDescriptionFindManyArgs
  ): Promise<ChartDescription[]> {
    return this.service.chartDescriptions(args);
  }

  @graphql.Query(() => ChartDescription, { nullable: true })
  async chartDescription(
    @graphql.Args() args: ChartDescriptionFindUniqueArgs
  ): Promise<ChartDescription | null> {
    const result = await this.service.chartDescription(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChartDescription)
  async createChartDescription(
    @graphql.Args() args: CreateChartDescriptionArgs
  ): Promise<ChartDescription> {
    return await this.service.createChartDescription({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ChartDescription)
  async updateChartDescription(
    @graphql.Args() args: UpdateChartDescriptionArgs
  ): Promise<ChartDescription | null> {
    try {
      return await this.service.updateChartDescription({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChartDescription)
  async deleteChartDescription(
    @graphql.Args() args: DeleteChartDescriptionArgs
  ): Promise<ChartDescription | null> {
    try {
      return await this.service.deleteChartDescription(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}