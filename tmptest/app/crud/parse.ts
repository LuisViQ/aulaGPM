import { CrudFieldType } from "./types";

export function parseByType(type: CrudFieldType, raw: string): string | number {
  if (type === "number") {
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  }
  return raw;
}
