import { render ,screen} from '@testing-library/react';
import Sum from './Sum';
describe("all test cases",()=>{
    test("my first test case",()=>{
        render(<Sum a={10} b={20}/>)
        const linkElement = screen.getByText(/30/i);
        expect(linkElement).toBeInTheDocument();
    })
    // it("my second test case",()=>{
    //     expect(sum(0,1)).toBe(1);
    // })
    // test("my third  test case",()=>{
    //     expect(sum(0,1)).not.toBe(2);
    // })
    // test("my fourth test case",()=>{
    //     let data=sum(0,1);
    //     expect(data).toEqual({name:"anushka"});
    // })
})