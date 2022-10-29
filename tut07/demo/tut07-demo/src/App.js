import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import GeneralPageTemplate from './components/GeneralPageTemplate/GeneralPageTemplate';

function App() {
  return (
    <div className="App">
      <GeneralPageTemplate 
        title="Hello World"
      >
       <Button 
         text="click me"
       /> 
       <Button 
         text="for something crazy"
       /> 
      </GeneralPageTemplate>
      
    </div>
  );
}

export default App;
