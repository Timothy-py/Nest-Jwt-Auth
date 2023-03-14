import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetCurrentUserId = createParamDecorator(
    (ctx: ExecutionContext):number => {
        const request: Express.Request = ctx
            .switchToHttp()
            .getRequest()

        return request.user['sub'];
    }
)