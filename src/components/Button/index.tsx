import { ButtonContainer } from './styles';

interface IButton {
  variant?: string;
}

export function Button({ variant = 'primary' }: IButton) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
