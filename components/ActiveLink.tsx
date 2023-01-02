import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";
import { ActiveLinkProps } from "./interface/interfaces";
const style: CSSProperties = {
  color: "#0070f3",
  backgroundColor: "red",
};
export const ActiveLink: FC<ActiveLinkProps> = ({ pag, href }) => {
  const router = useRouter();

  return (
    <Link style={router.route === href ? style : undefined} href={`${href}`}>
      {pag}
    </Link>
  );
};
