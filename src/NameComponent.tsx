import React, { SyntheticEvent } from 'react';

type NameComponentPropsType = {
  firstName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { firstName, lastName } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarge');
    console.log(event.target, 'target');
  };

  const mainHandler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarge');
    console.log(event.target, 'target');
  };

  return (
    <div role="presentation" onClick={mainHandler} className="name_wrapper">
      {/* <p className="text">Natalya</p>
      <p className="text">Kotkova</p> */}
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button type="button" onClick={handler}>
        CLICK ME
      </button>
    </div>
  );
};

export default NameComponent;
