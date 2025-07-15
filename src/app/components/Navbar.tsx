import Image from "next/image";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link
        href={"/"}
        className="flex items-center gap-2"
      >
        <Image
          src={CalendarMonthIcon}
          alt="Logo"
          className="size-10"
        ></Image>
        <h4 className="text-3xl font-semibold">
          Facundo <span className="text-blue-500">Fernandez</span>
        </h4>
      </Link>
    </div>
  );
}
