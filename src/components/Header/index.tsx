import { StyledHeader } from "./style";

type HeaderProps = {
  children: string;
  as?: "h1" | "h2" | "h3";
};

export default function Header({ as, children }: HeaderProps) {
  return <StyledHeader as={as}>{children}</StyledHeader>;
}
