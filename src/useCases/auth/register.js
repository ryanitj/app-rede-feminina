import { AuthService } from "../../services/auth";
import { responseUtil } from "../../util/response";

export const REGISTER_USE_CASES = {
    "register":"register",
}

export const registerUseCase = (useCase, params) => {
    switch (useCase) {
        case REGISTER_USE_CASES.register:
            return (data) => register(params)
        default:
            break;
    }
}

export const register = async (data) => {
    try {
        const response = await AuthService.register(data["email"], data["password"]);

        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Erro!", error)
    }
}