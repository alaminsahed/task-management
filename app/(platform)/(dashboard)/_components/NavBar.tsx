import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <nav className="bg-white border-b shadow-sm w-full flex items-center px-4 top-0 fixed h-14 z-50">
      <div className="flex gap-x-4 itmes-center">
        <div className="hidden md:flex pt-2">
          <Logo />
        </div>
        <Button className="space-x-4 md:flex hidden">Create</Button>
        <Button className="md:hidden">+</Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organzation/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
}

export default NavBar;
