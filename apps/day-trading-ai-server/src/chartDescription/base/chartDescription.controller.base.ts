/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChartDescriptionService } from "../chartDescription.service";
import { ChartDescriptionCreateInput } from "./ChartDescriptionCreateInput";
import { ChartDescription } from "./ChartDescription";
import { ChartDescriptionFindManyArgs } from "./ChartDescriptionFindManyArgs";
import { ChartDescriptionWhereUniqueInput } from "./ChartDescriptionWhereUniqueInput";
import { ChartDescriptionUpdateInput } from "./ChartDescriptionUpdateInput";

export class ChartDescriptionControllerBase {
  constructor(protected readonly service: ChartDescriptionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChartDescription })
  async createChartDescription(
    @common.Body() data: ChartDescriptionCreateInput
  ): Promise<ChartDescription> {
    return await this.service.createChartDescription({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        imageUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ChartDescription] })
  @ApiNestedQuery(ChartDescriptionFindManyArgs)
  async chartDescriptions(
    @common.Req() request: Request
  ): Promise<ChartDescription[]> {
    const args = plainToClass(ChartDescriptionFindManyArgs, request.query);
    return this.service.chartDescriptions({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        imageUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChartDescription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chartDescription(
    @common.Param() params: ChartDescriptionWhereUniqueInput
  ): Promise<ChartDescription | null> {
    const result = await this.service.chartDescription({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        imageUrl: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChartDescription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChartDescription(
    @common.Param() params: ChartDescriptionWhereUniqueInput,
    @common.Body() data: ChartDescriptionUpdateInput
  ): Promise<ChartDescription | null> {
    try {
      return await this.service.updateChartDescription({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          imageUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChartDescription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChartDescription(
    @common.Param() params: ChartDescriptionWhereUniqueInput
  ): Promise<ChartDescription | null> {
    try {
      return await this.service.deleteChartDescription({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          imageUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
