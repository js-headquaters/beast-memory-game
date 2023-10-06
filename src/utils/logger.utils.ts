export class Logger {
  constructor(private name: string) {}

  log(message: string, data?: any) {
    const text = `[${this.name}] > ${message}`;
    if (data) {
      console.log(text, data);
    } else {
      console.log(text);
    }
  }

  error(message: string, data?: unknown) {
    console.error(
      `[${this.name}] > ${message}`,
      ...[data ? data : null].filter((v) => v),
    );
  }
}
