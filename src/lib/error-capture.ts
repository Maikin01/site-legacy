let lastCapturedError: Error | undefined;

export function captureError(error: unknown) {
  lastCapturedError = error instanceof Error ? error : new Error(String(error));
}

export function consumeLastCapturedError(): Error | undefined {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

if (typeof window !== "undefined") {
  window.addEventListener("error", (event) => {
    captureError(event.error);
  });
  window.addEventListener("unhandledrejection", (event) => {
    captureError(event.reason);
  });
}
