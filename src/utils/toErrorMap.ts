import { FieldError } from "../generated/graphql";

// convert arra to objects
export const toErrorMap = (errors: FieldError[]) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({field, message}) => {
        errorMap[field] = message;
    });

    return errorMap;
}