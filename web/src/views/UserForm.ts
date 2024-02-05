import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    })
  }
  eventsMap() : { [key: string]: () => void } {
    return {
        "click:.set-name" : this.onSetChangeName,
        "click:.set-age" : this.onSetAgeRandom,
    }
  }

  onSetChangeName= () : void => {
    const input = this.parent.querySelector('input');
    if(input) {
      const name = input.value
      this.model.set({name})
    }
  }

  onSetAgeRandom = () : void => { 
    this.model.setRandomAge()
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>Name : ${this.model.get('name')}</div>
        <div>Name : ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Click Me</button>
        <button class="set-age">Set Random Age</button>
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
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
