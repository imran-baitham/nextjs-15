"use server";

// unknown - proper validation, authentication for security
export async function SubmitFeedBack(formData: FormData) {
  const dataObj = Object.fromEntries(formData.entries());
  console.log(dataObj, "dataObj");
}
