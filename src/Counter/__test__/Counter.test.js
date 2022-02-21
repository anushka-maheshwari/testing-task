import Counter from "../Counter";
import {fireEvent, render,screen} from '@testing-library/react';
import { act } from "react-dom/test-utils";
// we usually want to render our React tree to a DOM element that’s attached to document.
// This is important so that it can receive DOM events. When the test ends, we want to “clean up” and 
// unmount the tree from the document.

// A common way to do it is to use a pair of beforeEach and afterEach blocks so that they’ll always run and
//  isolate the effects of a test to itself

//we have four methods also :beforeEach,beforeAll,afterEach,afterAll
// beforeEach:Execute before each test method. 
//beforeAll:Execute before all test methods of the class are executed. 
//afterEach:Execute after each test method.       
//afterAll:Execute after all test methods in the current class.  
let component;
beforeEach(()=>{
     component=render(<Counter/>);
})


// When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction 
// with a user interface. react-dom/test-utils provides a helper called act() that makes sure all updates related to
// these “units” have been processed and applied to the DOM before you make any assertions

let container=null;
//my first test case:
test("render method has heading or not",()=>{
    act(()=>{
        // container=render(<Counter/>);
    })
    // const headingElement=container.getByTestId("heading");
    const headingElement=component.getByTestId("heading");
    expect(headingElement.textContent).toBe("My Counter");
})

//my second test case:
test("counter should starts with 0 ",()=>{
    // const component=render(<Counter/>);
    const counterElement=component.getByTestId("counter");
    expect(counterElement.textContent).toBe("0");
})

// my third test case:
test("input value should starts with 1 ",()=>{
    // const component=render(<Counter/>);
    const inputElement=component.getByTestId("input");
    expect(inputElement.value).toBe("1");
})

//my fourth test case:
test("increment button should have + sign",()=>{
    // const component=render(<Counter/>);
    const incrementElement=component.getByTestId("increment");
    expect(incrementElement.textContent).toBe("+");
})

//my fifth test case:
test("decrement button should have - sign",()=>{
    // const component=render(<Counter/>);
    const decrementElement=component.getByTestId("decrement");
    expect(decrementElement.textContent).toBe("-");
})

//my sixth test case:
test("input value should starts with 1 ",()=>{
    // const component=render(<Counter/>);
    const inputElement=component.getByTestId("input");
    expect(inputElement.value).toBe("1");
    fireEvent.change(inputElement,{
        target:{
            value:"5"
        }
    })
    expect(inputElement.value).toBe("5");
})

//my seventh test case:
test("increment button should icrease the value of counter by 1 ",()=>{
    // const component=render(<Counter/>);
    const incrementElement=component.getByTestId("increment");
    const counterElement=component.getByTestId("counter");
    fireEvent.click(incrementElement);
    expect(counterElement.textContent).toBe("1");
    
})

//my eigth test case:
test("decrement button should decrease  the value of counter by 1 ",()=>{
    // const component=render(<Counter/>);
    const decrementElement=component.getByTestId("decrement");
    const counterElement=component.getByTestId("counter");
    fireEvent.click(decrementElement);
    expect(counterElement.textContent).toBe("-1");
    
})

// my nighth test case:
test("increment button should icrease the value of counter by giving value ",()=>{
    // const component=render(<Counter/>);
    const inputElement=component.getByTestId("input");
    const counterElement=component.getByTestId("counter");
    const incrementElement=component.getByTestId("increment");
    fireEvent.change(inputElement,{
        target:{
            value:"5"
        }
    })
    fireEvent.click(incrementElement);
    expect(counterElement.textContent).toBe("5");
    
})

// my tenth test case:
test("decrement button should decrease the value of counter by giving value ",()=>{
    // const component=render(<Counter/>);
    const inputElement=component.getByTestId("input");
    const counterElement=component.getByTestId("counter");
    const decrementElement=component.getByTestId("decrement");
    fireEvent.change(inputElement,{
        target:{
            value:"5"
        }
    })
    fireEvent.click(decrementElement);
    expect(counterElement.textContent).toBe("-5");
    
})


//my final test case:
test("decrement button should decrease the value of counter by giving value ",()=>{
    // const component=render(<Counter/>);
    const inputElement=component.getByTestId("input");
    const counterElement=component.getByTestId("counter");
    const decrementElement=component.getByTestId("decrement");
    const incrementElement=component.getByTestId("increment");
    fireEvent.change(inputElement,{
        target:{
            value:"10"
        }
    })
    fireEvent.click(incrementElement);
    fireEvent.click(incrementElement);
    fireEvent.click(incrementElement);
    fireEvent.click(decrementElement);
    fireEvent.click(decrementElement);
    expect(counterElement.textContent).toBe("10");
    
})
