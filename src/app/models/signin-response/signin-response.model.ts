import { User } from "../user/user.model";
import { Tokens } from "../tokens/token.model";

export class SigninResponse {
    token: Tokens;
    user: User
}
