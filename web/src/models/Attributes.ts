export class Attributes<T extends object> {
    // private data: T; // Make 'data' private to ensure encapsulation
  
    // constructor(data: T) {
    //   this.data = data;
    // }

    constructor(private data: T) {}
  
    get = <K extends keyof T>(key: K): T[K]  => {
      return this.data[key]; // Use 'keyof T' to ensure type safety for keys
    }
  
    set(update: T): void {
      Object.assign(this.data, update);
    }

    getAll() {
      return this.data;
    }
  }