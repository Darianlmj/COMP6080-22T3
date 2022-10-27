import './App.css';
import Button from './component/Button/Button';
import GeneralTemplate from './component/GeneralTemplate/GeneralTemplate';

function App() {
  return (
    <div className="App">
      <GeneralTemplate 
        title="Hello World"
        children={[
          <Button text="Click Me" />,
          <Button text="For Something Crazy" />,
        ]}
      />
    </div>
  );
}

export default App;
