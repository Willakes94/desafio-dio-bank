import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler
}

export const DButton = ({ onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      colorScheme='teal' size='sm' width='40%'>
      Entrar
    </Button>
  );
};

export default DButton;