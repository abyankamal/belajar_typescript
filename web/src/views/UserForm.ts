import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  
  eventsMap() : { [key: string]: () => void } {
    return {
        "click:.set-name" : this.onSetChangeName,
        "click:.set-age" : this.onSetAgeRandom,
        "click:.set-save" : this.onSetSaveName
    }
  }

  onSetSaveName= () : void => {
    this.model.save()
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
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Click Me</button>
        <button class="set-age">Set Random Age</button>
        <button class="set-save">Save Name</button>
      </div>
    `;
  }
}
