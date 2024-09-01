import * as graphql from "@nestjs/graphql";
import { UserFeedbackResolverBase } from "./base/userFeedback.resolver.base";
import { UserFeedback } from "./base/UserFeedback";
import { UserFeedbackService } from "./userFeedback.service";

@graphql.Resolver(() => UserFeedback)
export class UserFeedbackResolver extends UserFeedbackResolverBase {
  constructor(protected readonly service: UserFeedbackService) {
    super(service);
  }
}
