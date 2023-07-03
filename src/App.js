
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState("");
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');
  let [erase, setErase] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
    setInput('');
  };

  const handleClearLine = () => {
    setCurrentNumber('');
    setInput('');
  };

  
  const handleAddNumber = (num) => {

    if(erase === true){
      setInput('');
      setErase(false);
      setCurrentNumber(prev => `${prev === '' ? '' : prev}${num}`);
      setInput(prev => `${prev === '' ? '' : prev}${num}`)
    } else {
      setCurrentNumber(prev => `${prev === '' ? '' : prev}${num}`);
      setInput(prev => `${prev === '' ? '' : prev}${num}`)
    }

  };

  const handleRemoveNumber = (num) => {

    setCurrentNumber(prev => prev.slice(0, -1));
    setInput(prev => prev.slice(0, -1));

  };

 
  const handleSumNumbers = () => {

    if(currentNumber === ''){
      setInput('');
    } else if(firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
      setInput((prev) => prev + '+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('');
      setOperation('');
      setInput(String(sum));
    }
  };

  const handleSubNumbers = () => {

    if(currentNumber === ''){
      setInput('');
    } else if(firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
      setInput((prev) => prev + '-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber('');
      setOperation('');
      setInput(String(sub));
    }

  };

  const handleMultiplierNumbers = () => {

    if(currentNumber === ''){
      setInput('');
    } else if(firstNumber === ''){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('');
        setOperation('x');
        setInput((prev) => prev + 'x');
    }else {
      var x = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(x));
      setFirstNumber('');
      setOperation('');
      setInput(String(x));
    }

  };

  const handleDivideNumbers = () => {

    if(currentNumber === ''){
      setInput('');
    } else if(firstNumber === ''){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('');
        setOperation('/');
        setInput((prev) => prev + '÷');
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('');
      setOperation('');
      setInput(String(div));
    }

  };

  const handlePercentNumbers = () => {
    
    if(currentNumber === ''){
      setInput('');
    } else if(currentNumber !== ''){
      setCurrentNumber(String(currentNumber / 100));
      setInput(String(currentNumber / 100));
    }else{
      setOperation('');
    }
  };

  const handleSquareRoot = () => {

    if(currentNumber === ''){
      setInput('');
    } else if (currentNumber >= 0) {
      const squareRoot = Math.sqrt(currentNumber);
      setCurrentNumber(squareRoot.toString());
      setInput(squareRoot.toString());
    } else {
      setCurrentNumber('');
      setInput('ERROR');
      setOperation('');
      setErase(true);
    }
  };

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case 'x':
          handleMultiplierNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }

    }

  };

  return (
    <Container>
      <Content>
        <Input value={input}/>
        <Row>
          <Button label="√" onClick={handleSquareRoot}/>
          <Button label="%" onClick={handlePercentNumbers}/>
          <Button label="÷" onClick={handleDivideNumbers}/>
          <Button label="<-" onClick={handleRemoveNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultiplierNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="ce"onClick={handleClearLine}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;