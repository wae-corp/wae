import {ActionFunction, json} from "@remix-run/node";
import {z} from "zod";
import {appendLandingLeadIntoSheet} from "~/backend/googleSheet.server";
import {EnquiryType} from "~/backend/typeDefinations";
import {getErrorFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";

export type ActionData = {
  error: string | null;
};

export const action: ActionFunction = async ({request}) => {
  let error: string | null = null;
  console.log("HIT!!");
  try {
    const formData = await request.formData();

    const formValues = {
      name: formData.get("name"),
      companyName: formData.get("companyName"),
      contact: formData.get("contact"),
      message: formData.get("message"),
      enquirer: formData.get("enquiryFor"),
    };

    const leadSchema = z.object({
      name: z.string().min(1, {message: "First Name is required"}),
      companyName: z.string().min(1, {message: "Company Name is required"}),
      contact: z
        .string()
        .regex(/^[0-9]{10}$/, {message: "Invalid contact number"}),
      message: z.string().min(1, {message: "Message cannot be empty"}),
      enquirer: z.nativeEnum(EnquiryType),
    });

    const parsedData = leadSchema.safeParse(formValues);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const response = await appendLandingLeadIntoSheet(parsedData.data);
    if (!response.success) {
      throw response.err;
    }
    console.log("Lead has been added to the sheet successfully");
    return {
      status: 200,
      body: JSON.stringify({message: "Action executed successfully"}),
    };
  } catch (_error) {
    const error_ = getErrorFromUnknown(_error);
    error = error_.message;

    console.log(
      "🤡 ~ file: landing-page-lead.tsx:39 ~ constaction:ActionFunction= ~ error:",
      error,
    );

    const actionData: ActionData = {
      error,
    };
    return json(actionData);
  }
};
