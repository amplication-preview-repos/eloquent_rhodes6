import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChartDescriptionServiceBase } from "./base/chartDescription.service.base";

@Injectable()
export class ChartDescriptionService extends ChartDescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
