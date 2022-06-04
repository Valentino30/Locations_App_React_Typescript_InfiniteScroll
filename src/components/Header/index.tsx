import { StyledHeader } from "./style";

export type HeaderProps = {
  children: string;
  capitalize?: boolean;
  as?: "h1" | "h2" | "h3" | "h4";
};

export default function Header({ as, children, capitalize }: HeaderProps) {
  return (
    <StyledHeader as={as} capitalize={capitalize}>
      {children}
    </StyledHeader>
  );
}
