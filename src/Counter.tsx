import React from 'react';
import { setTokenSourceMapRange } from 'typescript';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const addHandler = () => {
    console.log(count);
    setCount(count + step);
    // setCount((prev) => prev + 1);

    console.log(count);
  };

  const removeHandler = () => {
    setCount(count - step);
  };

  return (
    <div>
      <h5>{title}</h5>
      <p>{`${count} штук добавлено`}</p>
      <div>
        <button type="button" onClick={removeHandler}>
          {`Убрать ${step} ед`}
        </button>
        <button type="button" onClick={addHandler}>
          {` Добавить ${step} ед`}
        </button>
        <button type="button" onClick={() => setStep(step + 1)}>
          Увеличить шаг 1 ед.
        </button>
        <button type="button" onClick={() => setStep(step - 1)}>
          Уменьшить шаг 1 ед.
        </button>
      </div>
    </div>
  );
};

export default Counter;
