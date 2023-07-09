import logoSrc from "../assets/google.svg";
import avatar from "../assets/avatar.jpg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { ReactComponent as Apps } from "../assets/apps.svg";
import Button from "../components/Button";

export default function Header() {
  return (
    <header className="header flex justify-between items-center px-3 py-2 border-b border-gray-300">
      <div className="flex items-center gap-1">
        <Button>
          <Bars width="24px" height="24px" fill="currentColor" />
        </Button>
        <a href="/" className="flex items-center gap-1 mt-1">
          <img src={logoSrc} alt="logo" />
          <span className="font-product text-[22px] leading-6">Traduction</span>
        </a>
      </div>
      <div className="flex items-center gap-1">
        <Button padding="p-2">
          <Apps width="24px" height="24px" fill="currentColor" />
        </Button>
        <Button padding="p-1">
          <img
            src={avatar}
            alt="avatar"
            height="32px"
            width="32px"
            className="rounded-full"
          />
        </Button>
      </div>
    </header>
  );
}
