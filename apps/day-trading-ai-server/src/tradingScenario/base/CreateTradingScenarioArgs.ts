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
import { TradingScenarioCreateInput } from "./TradingScenarioCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTradingScenarioArgs {
  @ApiProperty({
    required: true,
    type: () => TradingScenarioCreateInput,
  })
  @ValidateNested()
  @Type(() => TradingScenarioCreateInput)
  @Field(() => TradingScenarioCreateInput, { nullable: false })
  data!: TradingScenarioCreateInput;
}

export { CreateTradingScenarioArgs as CreateTradingScenarioArgs };
