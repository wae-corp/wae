import {z} from "zod";
import {
    Iso8601DateTime,
    NonEmptyString,
    Uuid,
    zodIso8601DateTime,
    zodUuid,
} from "~/global--common-typescript/typeDefinations";
import {
    errResult,
    okResult,
    Result,
} from "~/global--common-typescript/utilities/errorHandling";

export function getErrorFromUnknown(error: unknown): Error {
    if (error instanceof Error) {
        return error;
    }

    return new Error(String(error));
}

export function getStringFromUnknown(input: unknown): Result<string> {
    // TODO: Replace with zod
    if (typeof input !== "string") {
        return errResult(
            new Error(`${input} of type ${typeof input} is not a valid string`),
        );
    }

    return okResult(input);
}

export function getNonEmptyStringFromUnknown(
    input: unknown,
): Result<NonEmptyString> {
    // TODO: Replace with zod
    if (typeof input !== "string" || input.length === 0) {
        return errResult(
            new Error(
                `${input} of type ${typeof input} is not a valid NonEmptyString`,
            ),
        );
    }

    return okResult(input as NonEmptyString);
}

export function getBooleanFromUnknown(input: unknown): Result<boolean> {
    const validateBoolean = z.boolean().or(
        z
            .string()
            .toLowerCase()
            .transform((x) => x === "true")
            .pipe(z.boolean()),
    );

    let parsedInput: boolean;
    try {
        parsedInput = validateBoolean.parse(input);
    } catch (error_: unknown) {
        const error = getErrorFromUnknown(error_);
        return errResult(error);
    }

    return okResult(parsedInput);
}

export function getIso8601DateTimeFromUnknown(
    input: unknown,
): Result<Iso8601DateTime> {
    try {
        zodIso8601DateTime.parse(input);
    } catch (error_: unknown) {
        const error = getErrorFromUnknown(error_);
        return errResult(error);
    }

    return okResult(input as Iso8601DateTime);
}

export function getUuidFromUnknown(input: unknown): Result<Uuid> {
    try {
        zodUuid.parse(input);
    } catch (error_: unknown) {
        const error = getErrorFromUnknown(error_);
        return errResult(error);
    }

    return okResult(input as Uuid);
}

export function getNumberFromUnknown(input: unknown): Result<number> {
    if (typeof input === "number") {
        return okResult(input);
    }

    // TODO: Replace with zod
    if (typeof input !== "string" || input.length === 0) {
        return errResult(
            new Error(`${input} of type ${typeof input} is not a valid number`),
        );
    }

    const number = parseFloat(input);

    if (isNaN(number)) {
        return errResult(
            new Error(`${input} of type ${typeof input} is not a valid number`),
        );
    }

    return okResult(number);
}
