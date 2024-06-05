export const responseUtil = (success = true, message = "", data) => {
    return {
        success,
        message,
        data
    }
}