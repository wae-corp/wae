import {z as zod} from "zod";

export type Uuid = string & {__brand: "Uuid"};

export type NonEmptyString = string & {__brand: "NonEmptyString"};

export type Iso8601DateTime = string & {__brand: "Iso8601DateTime"};
export type Iso8601Date = string & {__brand: "Iso8601Date"};
export type Iso8601Time = string & {__brand: "Iso8601Time"};

export type JwtString = string & {__brand: "JwtString"};

export type Integer = number;
export type RealNumber = number;

export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

export const emailIdValidationPattern = "^.+@.+\\..+$";
export const emailIdValidationRegex = new RegExp(emailIdValidationPattern);

export const nameValidationPattern = "^[a-zA-Z. ]+$";
export const nameValidationRegex = new RegExp(nameValidationPattern);

export const phoneNumberValidationPattern = "^[6-9][0-9]{9}$";
export const phoneNumberValidationRegex = new RegExp(
    phoneNumberValidationPattern,
);
export const indianPhoneNumberValidationPattern = "^[6-9]{1}[0-9]{9}$";
export const indianPhoneNumberValidationRegex = new RegExp(
    indianPhoneNumberValidationPattern,
);

export const iso8601DateTimeValidationPattern =
    "^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:.\\d*)?)((-(\\d{2}):(\\d{2})|Z)?)$";
export const zodIso8601DateTime = zod
    .string()
    .regex(new RegExp(iso8601DateTimeValidationPattern));

export const uuidValidationPattern =
    "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
export const zodUuid = zod.string().regex(new RegExp(uuidValidationPattern));
