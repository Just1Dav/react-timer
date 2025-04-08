import styled from 'styled-components';

interface IButtonContainer {
  variant: string;
}

export const ButtonContainer = styled.button<IButtonContainer>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.colors['green-500']};
`;
