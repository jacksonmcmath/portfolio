import Link from "next/link";
import type { ReactNode } from "react";

export interface TileProps {
  label: string;
  icon: ReactNode;
  href?: string;
}

const Tile = ({ label, icon, href }: TileProps) => {
  const content = (
    <div className="bg-gray-200 h-20 w-24 rounded flex flex-col justify-center items-center">
      <div className="flex justify-center mb-1">{icon}</div>
      <p className="text-center">{label}</p>
    </div>
  );
  return href ? (
    <Link href={href}>
      <a>{content}</a>
    </Link>
  ) : (
    content
  );
};

export default Tile;
