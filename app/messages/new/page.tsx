import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { messageTypes } from "@/types/messages";
import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData: FormData) {
    "use server";

    const message = formData.get("message") as FormDataEntryValue | null;
    if (message === null) {
      throw new Error("Message is required");
    }

    // addMessage(message as messageTypes[]);
    // revalidateTag("msg");
    revalidatePath("/messages", "layout");
    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
