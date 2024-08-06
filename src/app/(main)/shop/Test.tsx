import React, { useState } from 'react';
import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { A, TestType } from '@lib/constant';

type TestProps = {
  selectedColumn: TestType[];
};

const Test: React.FC<TestProps> = ({ selectedColumn }) => {
  const [test1, setTest1] = useState<TestType[]>();
  const [test2, setTest2] = useState<TestType[]>();

  React.useEffect(() => {
    setTest1(selectedColumn);
    setTest2(selectedColumn);
  }, [selectedColumn]);

  return (
    <div className='mx-auto flex flex-col gap-y-3 p-10'>
      {test2?.map(item => (
        <div className='flex gap-x-2' key={item.key}>
          <Checkbox checked={item.selected} />
          <Label>{item.text}</Label>
        </div>
      ))}
    </div>
  );
};

export default Test;
