import React from 'react';
import Input from './Input';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ title, children }: FormPropsType) => (
  <div>
    {/* <h1>AUTH FORM</h1> */}
    <h1>{title}</h1>
    <div className="form_inputs">
      {children}
      {/* <Input /> */}

      {/* <input /> */}
    </div>
  </div>
);

export default Form;
