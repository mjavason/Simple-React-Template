type DateFormatUnion =
  | 'MMMM dd, yyyy'
  | 'dd MMMM yyyy'
  | 'dd MMM, yy'
  | 'MM/dd/yyyy'
  | 'dd/MM/yyyy'
  | 'dd MMM yyyy';

type DateTimeFormatUnion =
  | 'MMMM dd, yyyy, h:mm a'
  | 'dd MMMM yyyy, h:mm a'
  | 'dd MMM, yy, h:mm a'
  | 'MM/dd/yyyy, h:mm a'
  | 'dd/MM/yyyy, h:mm a'
  | 'dd MMM yyyy, h:mm a'
  | 'MMMM dd, yyyy, HH:mm'
  | 'dd MMMM yyyy, HH:mm'
  | 'dd MMM, yy, HH:mm'
  | 'MM/dd/yyyy, HH:mm'
  | 'dd/MM/yyyy, HH:mm'
  | 'dd MMM yyyy, HH:mm';

// formatFriendlyDate('2024-05-25T09:20:41.161Z', 'MMMM dd, yyyy');
// May 25, 2024
export function formatFriendlyDate(
  dateString: string,
  format: DateFormatUnion = 'MMMM dd, yyyy',
): string {
  const date = new Date(dateString);

  const tokens: Record<string, string> = {
    yyyy: date.getFullYear().toString(),
    yy: date.getFullYear().toString().slice(-2),
    MMMM: date.toLocaleString('en-US', { month: 'long' }),
    MMM: date.toLocaleString('en-US', { month: 'short' }),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    M: String(date.getMonth() + 1),
    dd: String(date.getDate()).padStart(2, '0'),
    d: String(date.getDate()),
  };

  return format.replace(
    /yyyy|yy|MMMM|MMM|MM|M|dd|d/g,
    (token) => tokens[token as DateFormatUnion],
  );
}

// formatFriendlyDateTime('2024-05-25T09:20:41.161Z', 'MMMM dd, yyyy, h:mm a');
// May 25, 2024, 9:20 AM
export function formatFriendlyDateTime(
  dateString: string,
  format: DateTimeFormatUnion = 'MMMM dd, yyyy, h:mm a',
): string {
  const date = new Date(dateString);

  const hours = date.getHours();
  const tokens: Record<string, string> = {
    yyyy: date.getFullYear().toString(),
    yy: date.getFullYear().toString().slice(-2),

    MMMM: date.toLocaleString('en-US', { month: 'long' }),
    MMM: date.toLocaleString('en-US', { month: 'short' }),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    M: String(date.getMonth() + 1),

    dd: String(date.getDate()).padStart(2, '0'),
    d: String(date.getDate()),

    HH: String(hours).padStart(2, '0'),
    h: String(hours % 12 || 12),

    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),

    a: hours >= 12 ? 'PM' : 'AM',
  };

  return format.replace(
    /yyyy|yy|MMMM|MMM|MM|M|dd|d|HH|h|mm|ss|a/g,
    (token) => tokens[token],
  );
}
