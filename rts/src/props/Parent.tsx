import { Child } from "./Child"

export const Parent = () => {
    return <Child color="color" onClick={() => console.log('Hello World')}/>
}