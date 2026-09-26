import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (str: string) => {
  if (!str) {
    return "#718096";
  }

  if (str.toLowerCase().includes("pending")) {
    return "#F79009";
  }

  switch (str.toLowerCase()) {
    case "active":
    case "success":
    case "accepted":
    case "paid":
      return "#039855";

    case "pending":
    case "under_maintenance":
      return "#F79009";

    case "inactive":
    case "failed":
    case "unpaid":
    case "disabled":
      return "#D92D20";

    default:
      return "#718096";
  }
};

export function removeUnderscores(str: string): string {
  if (!str) {
    return "";
  }
  //   eslint-disable-next-line
  // @ts-ignore
  const res2 = str.replaceAll("_", " ");
  const res = res2[0].toUpperCase() + res2.slice(1);
  return res;
}

export function capitailizeString(str: string): string {
  if (!str) {
    return "";
  }
  //   eslint-disable-next-line
  // @ts-ignore
  const wrd = str.charAt(0).toUpperCase() + str.slice(1);
  return wrd;
}

export function cleanObject<T extends object>(obj: T): T {
  // Create a new object to avoid mutating the original one
  const result = {} as T;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // Check if the value is an object, and recursively clean it
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        const cleanedValue = cleanObject(value);
        if (Object.keys(cleanedValue).length > 0) {
          result[key] = cleanedValue;
        }
      }
      // Check if the value is not null, undefined, or an empty string
      else if (value !== null && value !== undefined && value !== "") {
        result[key] = value;
      }
    }
  }

  return result;
}

// eslint-disable-next-line
export function getErrorMessage(err: any) {
  const msg =
    // err?.response?.data?.errors?.email[0] ||
    // err?.response?.data?.errors?.phonenumber[0] ||
    err?.response?.data?.message?.message ||
    err?.response?.data?.message ||
    err?.response?.message ||
    err?.message ||
    "Something went wrong";

  if (msg.length > 150) {
    return msg.split("").slice(0, 50).join("");
  }

  return msg;
}

export function formatAmount(amount: number): string {
  if (!amount) {
    return "N/a";
  }

  if (typeof amount === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(amount);
  } else if (typeof amount === "string") {
    const amountNum = parseFloat(amount);
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(amountNum);
  } else {
    return "--";
  }
}
