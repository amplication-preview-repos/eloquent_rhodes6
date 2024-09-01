/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TradingScenarioWhereUniqueInput } from "./TradingScenarioWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TradingScenarioUpdateInput } from "./TradingScenarioUpdateInput";

@ArgsType()
class UpdateTradingScenarioArgs {
  @ApiProperty({
    required: true,
    type: () => TradingScenarioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TradingScenarioWhereUniqueInput)
  @Field(() => TradingScenarioWhereUniqueInput, { nullable: false })
  where!: TradingScenarioWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TradingScenarioUpdateInput,
  })
  @ValidateNested()
  @Type(() => TradingScenarioUpdateInput)
  @Field(() => TradingScenarioUpdateInput, { nullable: false })
  data!: TradingScenarioUpdateInput;
}

export { UpdateTradingScenarioArgs as UpdateTradingScenarioArgs };
