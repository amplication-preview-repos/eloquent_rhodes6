import { Module } from "@nestjs/common";
import { UserFeedbackModuleBase } from "./base/userFeedback.module.base";
import { UserFeedbackService } from "./userFeedback.service";
import { UserFeedbackController } from "./userFeedback.controller";
import { UserFeedbackResolver } from "./userFeedback.resolver";

@Module({
  imports: [UserFeedbackModuleBase],
  controllers: [UserFeedbackController],
  providers: [UserFeedbackService, UserFeedbackResolver],
  exports: [UserFeedbackService],
})
export class UserFeedbackModule {}
