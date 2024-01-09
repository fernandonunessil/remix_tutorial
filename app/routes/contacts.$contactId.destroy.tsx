import type { ActionFunctionArgs } from "@remix-run/node";

import { redirect } from "@remix-run/node";

import { deleteContact } from "../data";
import invariant from "tiny-invariant";

export const action = async ({ params }: ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contactId Params")
    await deleteContact(params.contactId)
    return redirect("/")
};
