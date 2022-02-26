import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Register } from '.';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </NavigationContainer>
)

describe('Register Screen', () => {
  it('should open category modal when user click on the button', () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    );

    const categoryModal = getByTestId('modal-category');
    const buttonCategory = getByTestId('button-category');
    fireEvent.press(buttonCategory)

    expect(categoryModal.props.visible).toBeTruthy();
  });
});

