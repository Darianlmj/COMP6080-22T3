import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'; 
import Button from '../src/components/Button'

// Button actually renders
// Text on the button
// Clicking the button + Check the text is correct
// Check if additional div is there

describe('Button', () => {
  it('renders a button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Click me!/i })
    expect(button).toBeInTheDocument();
  });
  
  it('the text on the button says click me', () => {
    render(<App />);
    expect(screen.getByText('Click Me!')).toBeInTheDocument();
  })
  
  it('clicking on the button changes the text', () => {
    userEvent.click(screen.getByRole('button', { name: /click me!/i }))
    const linkElement = screen.getByRole('button', { name: /Do not click me!/i });
    expect(linkElement).toBeInTheDocument(); 
    
    const text = screen.getByText("Don't do it!");
    expect(text).toBeInTheDocument();
  }); 

});



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Click Me!/i);
//   expect(linkElement).toBeInTheDocument();
// });
