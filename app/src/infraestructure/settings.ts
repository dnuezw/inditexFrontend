export default class Settings {
  public static baseUrl(): string {
    return 'http://localhost:1090'
  }

  public static rowMinProducts(): number {
    return 1
  }

  public static rowMaxProducts(): number {
    return 3
  }
}
