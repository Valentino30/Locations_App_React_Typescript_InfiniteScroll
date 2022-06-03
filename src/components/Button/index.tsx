import { StyledButton } from "./styles";

type ButtonProps = {
  onClick: () => void;
  children: string;
};

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
