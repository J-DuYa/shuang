import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('render Button with dumi', () => {

    const { getByText } = render(<Button type="default">default</Button>);
    expect(getByText("default")).toBeTruthy();
  });
});
