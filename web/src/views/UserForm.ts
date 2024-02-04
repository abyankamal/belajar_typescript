export class UserForm {
  constructor(public parent: Element) {}

  eventsMap() : { [key: string]: () => void } {
    return {
        "click:button" : this.onButtonClick,
        "mouseenter:h1" : this.onMouseEnter,
    }
  }

  onMouseEnter(): void {
    return console.log("Mouse was hovering");
  }

  onButtonClick(): void {
    return console.log("Hi There!");
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    
    for(let eventkey in eventsMap) {
        const [eventName, selector] = eventkey.split(':');

        fragment.querySelectorAll(selector).forEach((element) => {
            element.addEventListener(eventName, eventsMap[eventkey]);
        });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
