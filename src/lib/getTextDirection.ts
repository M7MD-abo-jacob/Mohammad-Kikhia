export function getTextDirection(text: string) {
  const firstChar = text.charAt(0);
  const arabic = /[\u0600-\u06FF]/;
  return arabic.test(firstChar) ? 'rtl' : 'ltr';
}
