export function debounce(fn: () => void, delay: number) {
  let timer: any = null;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
