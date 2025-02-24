import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import SidebarLogo from "@/components/layout/SidebarLogo";
import SidebarItem from "@/components/layout/SidebarItem";
import SidebarTweetButton from "@/components/layout/SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      icon: BsHouseFill,
      href: "/",
    },
    {
      label: "Notifications",
      icon: BsBellFill,
      href: "/notifications",
    },
    {
      label: "Profile",
      icon: FaUser,
      href: "/users/123",
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              icon={item.icon}
              href={item.href}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
