import { ProductService } from "../../services/product"
import { responseUtil } from "../../util/response"

export const PRODUCT_USE_CASES = {
    "inativate":"inativate",
    "exclude":"exclude",
    "save":"save",
}

export const pickUseCase = (useCase, params) => {
    switch (useCase) {
        case PRODUCT_USE_CASES.exclude:
            return exclude
        case PRODUCT_USE_CASES.save:
            return (data) => save(params)
        case PRODUCT_USE_CASES.inativate:
            return inativate
        default:
            break;
    }
}

export const inativate = async (status = "2") => {
    try {
        const response = await ProductService.inativate();

        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Erro!", error)
    }
}

export const exclude = async () => {
    try {
        const response = await ProductService.exclude();

        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Erro!", error)
    }
}

export const save = async (item) => {
    try {
        const response = await ProductService.save(item);
        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Erro!", error)
    }
}