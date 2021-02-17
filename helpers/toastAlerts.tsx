import { toast } from "react-toastify";

export const toastError = () =>
  toast["error"]("No match found :(", { toastId: "toastId" });
export const toastSuccess = () => toast.dismiss("toastId");
