import React, { useState } from 'react';
import { Button } from '@components/ui/button';
import { con, testState2 } from '@lib/constant';

const Test2: React.FC = () => {
  const [test3, setTest3] = useState<con[]>([]);
  const [test4, setTest4] = useState<con[]>([]);
  console.log(
    '🚀 ~ test3:',
    test3.map(item => item.number)
  );
  console.log(
    '🚀 ~ test4:',
    test4.map(item => item.number)
  );

  React.useEffect(() => {
    setTest3(testState2);
    setTest4(testState2);
  }, [testState2]);
  const handleSelect = (key: number) => {
    const newSelectOptions = test3.map(selectOption => {
      if (selectOption.key === key) {
        return { ...selectOption, number: selectOption.number + 1 };
      }
      return selectOption;
    });
    setTest3(newSelectOptions);
  };
  return (
    <div>
      {test3.map(item => (
        <div className='m-3' key={item.key}>
          <Button onClick={() => handleSelect(item.key)}>{item.label}</Button>
        </div>
      ))}
    </div>
  );
};

export default Test2;
