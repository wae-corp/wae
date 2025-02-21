import {
  errResult,
  okResult,
  Result,
  unwrap,
} from "~/global--common-typescript/utilities/errorHandling";
import {
  getErrorFromUnknown,
  getStringFromUnknown,
} from "~/global--common-typescript/utilities/typeValidationUtils";
import {auth, sheets} from "@googleapis/sheets";
import {DateTime} from "luxon";
import {EnquiryType} from "~/backend/typeDefinations";

type LandingLeadFormArgs = {
  name: string;
  companyName: string;
  contact: string;
  message: string;
  enquirer: EnquiryType;
};

type ContactInfoFormArgs = {
  name: string;
  contact: string;
  companyName: string;
  email: string;
  type: string;
};

type ProductContactFormArgs = {
  name: string;
  contact: string;
  companyName: string;
  email: string;
  productName: string;
};

/**
 * Function to append an email, date, and time to the Google Sheet
 * @param {string} email - The email address to be written to the sheet
 * @returns {Promise<Result<boolean>>} - Result indicating success or failure
 */
export async function appendEmailToSheet(
  email: string,
): Promise<Result<boolean>> {
  try {
    console.log("Trying to append email to sheet");
    const serviceCredentialsFileContent = unwrap(
      getStringFromUnknown(process.env.SERVICE_ACCOUNT_CREDENTIALS),
      "380cd1bf-a20d-4a32-8083-477b143b6a51",
    );
    const credentials = JSON.parse(serviceCredentialsFileContent);

    const sheetName = unwrap(
      getStringFromUnknown(process.env.NEWSLETTER_SHEET_NAME),
      "fdfab885-890e-41bc-8965-971c0e3333a7",
    );

    const workbookId = unwrap(
      getStringFromUnknown(process.env.WORKBOOK_ID),
      "0967e013-658f-432e-bbb1-e1fd5df388cd",
    );

    const authentication = new auth.GoogleAuth({
      credentials: credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheetsInstantiated = sheets({version: "v4", auth: authentication});

    const now = DateTime.now();
    const date = now.toISODate();
    const time = now.toISOTime();

    const values = [[email, time, date]];

    const response = await sheetsInstantiated.spreadsheets.values.append({
      spreadsheetId: workbookId,
      range: `${sheetName}!A:B`,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to append data to spreadsheet: ${response.statusText}`,
      );
    }
    // console.log("Email, date, and time appended successfully:", response.data);
    return okResult(true);
  } catch (error_) {
    const error = getErrorFromUnknown(error_);

    console.error("🤡 ~ file: googleSheet.server.tsx:60 ~ error:", error);

    return errResult(error);
  }
}

/**
 * Appends a new landing page lead to the specified Google Sheet.
 *
 * @param {LandingLeadFormArgs} args - An object containing the details of the new landing page lead.
 * @returns {Promise<Result<boolean>>} - A Promise that resolves to a Result containing a boolean value.
 * If the operation is successful, the Result will contain `true`. If an error occurs, the Result will contain the error object.
 */
export async function appendLandingLeadIntoSheet(
  args: LandingLeadFormArgs,
): Promise<Result<boolean>> {
  try {
    console.log("Trying to append landing page leads to sheet");
    const serviceCredentialsFileContent = unwrap(
      getStringFromUnknown(process.env.SERVICE_ACCOUNT_CREDENTIALS),
      "380cd1bf-a20d-4a32-8083-477b143b6a51",
    );
    const credentials = JSON.parse(serviceCredentialsFileContent);

    const sheetName = unwrap(
      getStringFromUnknown(process.env.LANDING_PAGE_LEAD_FORM_SHEET_NAME),
      "fdfab885-890e-41bc-8965-971c0e3333a7",
    );

    const workbookId = unwrap(
      getStringFromUnknown(process.env.WORKBOOK_ID),
      "0967e013-658f-432e-bbb1-e1fd5df388cd",
    );

    const authentication = new auth.GoogleAuth({
      credentials: credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheetsInstantiated = sheets({version: "v4", auth: authentication});

    const now = DateTime.now();
    const date = now.toISODate();
    const time = now.toISOTime();
    const values = [
      [
        time,
        date,
        args.name,
        args.companyName,
        args.contact,
        args.enquirer,
        args.message,
      ],
    ];
    const response = await sheetsInstantiated.spreadsheets.values.append({
      spreadsheetId: workbookId,
      range: `${sheetName}!A:B`,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to append data to spreadsheet: ${response.statusText}`,
      );
    }
    return okResult(true);
  } catch (error_) {
    const error = getErrorFromUnknown(error_);
    console.log("🤡 ~ file: googleSheet.server.tsx:92 ~ error:", error);
    return errResult(error);
  }
}

/**
 * Appends contact information to a specified Google Sheet.
 *
 * @param {ContactInfoFormArgs} args - An object containing the details of the new contact information.
 * @returns {Promise<Result<boolean>>} - A Promise that resolves to a Result containing a boolean value.
 * If the operation is successful, the Result will contain `true`. If an error occurs, the Result will contain the error object.
 */
export async function appendContactInfoIntoSheet(
  args: ContactInfoFormArgs,
): Promise<Result<boolean>> {
  try {
    console.log("Trying to append contact information to sheet");
    const serviceCredentialsFileContent = unwrap(
      getStringFromUnknown(process.env.SERVICE_ACCOUNT_CREDENTIALS),
      "380cd1bf-a20d-4a32-8083-477b143b6a51",
    );
    const credentials = JSON.parse(serviceCredentialsFileContent);

    const sheetName = unwrap(
      getStringFromUnknown(process.env.CONTACT_INFO_SHEET_NAME),
      "fdfab885-890e-41bc-8965-971c0e3333a7",
    );

    const workbookId = unwrap(
      getStringFromUnknown(process.env.WORKBOOK_ID),
      "0967e013-658f-432e-bbb1-e1fd5df388cd",
    );

    const authentication = new auth.GoogleAuth({
      credentials: credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheetsInstantiated = sheets({version: "v4", auth: authentication});
    const now = DateTime.now();
    const date = now.toISODate();
    const time = now.toISOTime();
    const values = [
      [
        time,
        date,
        args.name,
        args.companyName,
        args.contact,
        args.email,
        args.type,
      ],
    ];
    const response = await sheetsInstantiated.spreadsheets.values.append({
      spreadsheetId: workbookId,
      range: `${sheetName}!A:B`,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to append data to spreadsheet: ${response.statusText}`,
      );
    }
    return okResult(true);
  } catch (error_) {
    const error = getErrorFromUnknown(error_);
    console.log("🤡 ~ file: googleSheet.server.tsx:169 ~ error:", error);
    return errResult(error);
  }
}

export async function appendProductContactInfoIntoSheet(
  args: ProductContactFormArgs,
): Promise<Result<boolean>> {
  try {
    console.log("Trying to append product contact information to sheet");
    const serviceCredentialsFileContent = unwrap(
      getStringFromUnknown(process.env.SERVICE_ACCOUNT_CREDENTIALS),
      "cb74f72c-ab6c-46d7-afdf-a9a4bad818dc",
    );
    const credentials = JSON.parse(serviceCredentialsFileContent);
    const sheetName = unwrap(
      getStringFromUnknown(process.env.PRODUCT_ENQUIRY_SHEET_NAME),
      "c338a901-7b1b-4729-9596-68a1b2555873",
    );
    const workbookId = unwrap(
      getStringFromUnknown(process.env.WORKBOOK_ID),
      "8942927d-1065-4ce2-8fb3-0f0362c8a991",
    );
    const authentication = new auth.GoogleAuth({
      credentials: credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheetsInstantiated = sheets({version: "v4", auth: authentication});
    const now = DateTime.now();
    const date = now.toISODate();
    const time = now.toISOTime();
    const values = [
      [
        time,
        date,
        args.name,
        args.companyName,
        args.contact,
        args.email,
        args.productName,
      ],
    ];
    const response = await sheetsInstantiated.spreadsheets.values.append({
      spreadsheetId: workbookId,
      range: `${sheetName}!A:B`,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to append data to spreadsheet: ${response.statusText}`,
      );
    }
    return okResult(true);
  } catch (error_) {
    const error = getErrorFromUnknown(error_);
    console.log("🤡 ~ file: googleSheet.server.tsx:246 ~ error:", error);
    return errResult(error);
  }
}
