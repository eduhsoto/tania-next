import { NavA } from "@/styles/styled-components/navbar/Nav";
import { useRouter } from "next/router";

const activeClass = {
    color: "black",
    boxShadow: "inset 0 -4px 0 0 var(--secondary_color)",
    padding: "10px 0px",
    fontSize: "14px",
};

export default function NavLink({ route, linkName } : NavLinkProps) : JSX.Element {
  const { asPath } = useRouter();

  return (
    <NavA
      href={route}
      style={asPath === route ? activeClass : undefined}
    >
      {linkName}
    </NavA>
  );
}

interface NavLinkProps {
    route: string
    linkName: string
}