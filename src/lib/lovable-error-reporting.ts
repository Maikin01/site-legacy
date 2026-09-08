export function reportLovableError(
  error: Error | unknown,
  context?: Record<string, unknown>,
) {
  console.error("[Lovable error report]", context ?? {}, error);
}
