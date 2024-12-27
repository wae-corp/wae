import {ActionFunction, json} from "@remix-run/node";
import {z} from "zod";
import {appendEmailToSheet} from "~/backend/googleSheet.server";
import {getErrorFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";

export type ActionData = {
  error: string | null;
};

export const action: ActionFunction = async ({request}) => {
  let error: string | null = null;
  try {
    const formData = await request.formData();
    const email = formData.get("newsletter-mail");

    if (!email || typeof email !== "string") {
      throw new Error("Email is required and must be a string");
    }

    const schema = z.object({
      email: z.string().email(),
    });

    const validatedData = schema.parse({email});

    const response = await appendEmailToSheet(validatedData.email);
    if (!response.success) {
      throw response.err;
    }
    console.log("Email has been added to the sheet successfully");
    return {
      status: 200,
      body: JSON.stringify({message: "Action executed successfully"}),
    };
  } catch (_error) {
    const error_ = getErrorFromUnknown(_error);
    error = error_.message;

    console.log(
      "🤡 ~ file: subscribe-to-newsletter.tsx:29 ~ constaction:ActionFunction= ~ error:",
      error,
    );

    const actionData: ActionData = {
      error,
    };
    return json(actionData);
  }
};
