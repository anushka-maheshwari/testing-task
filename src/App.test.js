//What is Testing?
// testing is a method to check whether the actual product matches the expected requirements or not 



// Types of Testing?
// we have two types of testing :manual testing or automated testing
// manual testing-software is tested manually
// automated testing-software is tested thorugh test scripts
// manual testing is time consuming and automated testing tells what excatly went wrong 
//again automation testing divided into three types:
// 1.unit testing
// 2.integration testing
// 3.end to end testing



// what is integrated testing?
// NTEGRATION TESTING is defined as a type of testing where software modules are integrated logically and tested as a group.


// what is end to end testing?
// End-to-end testing is a technique that tests the entire software product from beginning to end to ensure the
// application flow behaves as expected. 


//What is unit testing ?
// Unit testing, a testing technique using which individual modules are tested to determine if there are any issues 
// by the developer himself. 
// The main aim is to isolate each unit of the system to identify, analyze and fix the defects.




//what are Unit Testing - Advantages?
// 1.Reduces Defects in the Newly developed features or reduces bugs when changing the existing functionality.
// 2.Reduces Cost of Testing as defects are captured in very early phase.
// 3.Improves design and allows better refactoring of code.
// 4.Unit Tests, when integrated with build gives the quality of the build as well.



//common structure for creating atest case is:
// 1.render a component we need to test
// 2.find element we want to interact with
// 3.interact with those ElementInternals
// 4.assert that the results are as expected.


// for testing we use jest and react testing library tool:
// Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
// React Testing Library is a set of helpers that let you test React components without relying on their implementation details. 





import App from './App';
import {render,screen} from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  //screen interact with the component we used to render.
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// //we have three types of methods :find methods,get methods ,query methods.

// //getBy :                            //getAllBy:
// // no match :error                   error
// // 1 match:return                    array
// // 1+ match:error                    array
// // await:no                          no


// //findBy :                            //findAllBy:
// // no match :error                   error
// // 1 match:return                    array
// // 1+ match:error                    array
// // await:yes                          yes



// //queryBy :                            //queryAllBy:
// // no match :null                    array
// // 1 match:return                    array
// // 1+ match:error                    array
// // await:no                          no


// // getByRole,getByLabelText,getByPlaceholderText,getByText--->they are accessible by everyone 
// // getByAltText,getByTitle---->semantic queries 
// // getByTestId--->Test Id 



test('renders learn react link', () => {//--->returns a single matched elemnet
  render(<App />);
  const linkElement = screen.getByRole('paragraph')
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {//--->returns an array of matched element
  render(<App />);
  const linkElement = screen.getAllByRole('paragraph')
  expect(linkElement[0]).toBeInTheDocument();
});


test('renders learn react link', () => {//--->returns a single matched elemnet
  render(<App />);
  const linkElement = screen.getByLabelText("Enter Name")
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {//--->returns an array of matched element
  render(<App />);
  const linkElement = screen.getAllByLabelText("Enter Name")
  expect(linkElement[0]).toBeInTheDocument();
});



test('renders learn react link', () => {//--->returns a single matched elemnet
  render(<App />);
  const linkElement = screen.getByPlaceholderText("name")
  expect(linkElement).toBeInTheDocument();
});



test('renders learn react link', () => {//--->returns an array of matched element
  render(<App />);
  const linkElement = screen.getAllByPlaceholderText("name")
  expect(linkElement[0]).toBeInTheDocument();
});




test('renders learn react link', async() => {//whwnever we use findby we have to use async await
  render(<App />);
  const linkElement = await screen.findByLabelText("Enter Name")
  expect(linkElement).toBeInTheDocument();
});


//describe:
// we can use describe block to group together all the test of similar types.