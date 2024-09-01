/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ChartDescription as PrismaChartDescription,
} from "@prisma/client";

export class ChartDescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChartDescriptionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.chartDescription.count(args);
  }

  async chartDescriptions(
    args: Prisma.ChartDescriptionFindManyArgs
  ): Promise<PrismaChartDescription[]> {
    return this.prisma.chartDescription.findMany(args);
  }
  async chartDescription(
    args: Prisma.ChartDescriptionFindUniqueArgs
  ): Promise<PrismaChartDescription | null> {
    return this.prisma.chartDescription.findUnique(args);
  }
  async createChartDescription(
    args: Prisma.ChartDescriptionCreateArgs
  ): Promise<PrismaChartDescription> {
    return this.prisma.chartDescription.create(args);
  }
  async updateChartDescription(
    args: Prisma.ChartDescriptionUpdateArgs
  ): Promise<PrismaChartDescription> {
    return this.prisma.chartDescription.update(args);
  }
  async deleteChartDescription(
    args: Prisma.ChartDescriptionDeleteArgs
  ): Promise<PrismaChartDescription> {
    return this.prisma.chartDescription.delete(args);
  }
}