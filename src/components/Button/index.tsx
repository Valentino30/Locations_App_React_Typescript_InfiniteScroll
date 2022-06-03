import { StyledButton } from "./styles";

type ButtonProps = {
  onClick: () => void;
  title: string;
};

export default function Button({ title, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}
