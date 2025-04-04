class ErrorEvent extends Event {
  error: any;
  filename: string;
  lineno: number;
  colno: number;
  message: string;
  constructor(type: string, eventInitDict?: ErrorEventInit) {
    super(type, eventInitDict);
    this.error = eventInitDict?.error;
    this.filename = eventInitDict?.filename ?? "";
    this.lineno = eventInitDict?.lineno ?? 0;
    this.colno = eventInitDict?.colno ?? 0;
    this.message = eventInitDict?.message ?? "";
  }
}

class CloseEvent extends Event {
  wasClean: boolean;
  code: number;
  reason: string;
  constructor(type: string, eventInitDict?: CloseEventInit) {
    super(type, eventInitDict);
    this.wasClean = eventInitDict?.wasClean ?? false;
    this.code = eventInitDict?.code ?? 0;
    this.reason = eventInitDict?.reason ?? "";
  }
}

const FillErrorEvent: typeof globalThis.ErrorEvent =
  globalThis.ErrorEvent || ErrorEvent;

const FillCloseEvent: typeof globalThis.CloseEvent =
  globalThis.CloseEvent || CloseEvent;

export { FillErrorEvent as ErrorEvent, FillCloseEvent as CloseEvent };
