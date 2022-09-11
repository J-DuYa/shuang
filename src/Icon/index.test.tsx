import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Icon from './index';

describe('Icon', () => {
  it('render Icon with dumi', () => {

    const { getByText } = render(<Icon />);
    expect(getByText("default")).toBeTruthy();
  });
});
