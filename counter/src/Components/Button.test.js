import {fireEvent, render, screen} from '@testing-library/react' 
import { Button } from './Button'
import App from '../App';
const onClick = jest.fn()

describe('Button Tests', () => { 
    it('should render without any error', () => { 
      render(<App />);
      screen.debug()
      // let linkElement = screen.getByText("Counter :- 0");
      // expect(linkElement).toBeInTheDocument();
     })

     it('should have add and reduce buttons', () => { 
      render(<Button>ADD</Button>)
      let Addbtn = screen.getByText("ADD")
      expect(Addbtn).toBeInTheDocument()

      render(<Button>REDUCE</Button>)
      let reducbtn = screen.getByText("REDUCE")
      expect(reducbtn).toBeInTheDocument()
    })

    it('should have an element with counter value as default', () => { 
      render(<App />)
      let button = screen.getByText("Counter :- 0")
      expect(button).toBeInTheDocument()
    })

    it('onClick of ADD, value of Counter should increment by 5', async () => { 
      render(<App />)
        // Click button
      fireEvent.click(screen.getByText("ADD"))
      let text = await screen.getByText("Counter :- 5") 
      expect(text).toBeInTheDocument()
    })

    it('onClick of REDUCE, the value of Counter should decrement by 5', async () => { 
    render(<App />)
      // Click button
    fireEvent.click(screen.getByText("REDUCE"))
    let text = await screen.getByText("Counter :- -5") 
    expect(text).toBeInTheDocument()
     })
 })