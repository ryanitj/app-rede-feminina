import { AuthService } from "../../services/auth";
import { responseUtil } from "../../util/response";

export const LOGIN_USE_CASES = {
    "login":"login",
}

export const loginUseCase = (useCase, params) => {
    switch (useCase) {
        case LOGIN_USE_CASES.login:
            return (data) => login(params)
        default:
            break;
    }
}

export const login = async (data) => {
    try {
        const response = await AuthService.login(data["email"], data["password"]);

        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Erro!", error)
    }
}