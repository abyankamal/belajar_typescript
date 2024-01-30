export class Attributes<T extends object> {
    private data: T; // Make 'data' private to ensure encapsulation
  
    constructor(data: T) {
      this.data = data;
    }
  
    get<K extends keyof T>(key: K): T[K] {
      return this.data[key]; // Use 'keyof T' to ensure type safety for keys
    }
  
    set<K extends keyof T>(key: K, value: T[K]): void {
      this.data[key] = value; // Update specific key with type-checked value
    }
  }