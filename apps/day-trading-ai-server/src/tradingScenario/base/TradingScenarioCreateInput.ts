/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MarketScanWhereUniqueInput } from "../../marketScan/base/MarketScanWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class TradingScenarioCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => MarketScanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarketScanWhereUniqueInput)
  @IsOptional()
  @Field(() => MarketScanWhereUniqueInput, {
    nullable: true,
  })
  marketScan?: MarketScanWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  scenarioName?: string | null;
}

export { TradingScenarioCreateInput as TradingScenarioCreateInput };
