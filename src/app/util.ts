export function nextLoop() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    });
  });
}
