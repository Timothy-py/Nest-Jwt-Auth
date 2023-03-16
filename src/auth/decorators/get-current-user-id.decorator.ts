import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtPayload } from "../types";

export const GetCurrentUserId = createParamDecorator(
    (_:undefined, ctx: ExecutionContext):number => {
        const request: Express.Request = ctx
            .switchToHttp()
            .getRequest()

        const user = request.user as JwtPayload
        return user.sub;
    }
)