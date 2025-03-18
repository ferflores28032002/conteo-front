import Link from "next/link";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icons } from "@/icons";
import { MaxWidthWrapper } from "..";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
  const router = useRouter();
  const { token, user, logout } = useAuthStore((state) => ({
    token: state.token,
    user: state.user,
    logout: state.logout,
  }));

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16 bg-white dark:bg-gray-950">
      <header className="relative">
        <MaxWidthWrapper className="border-b border-y-gray-200 dark:border-y-gray-700">
          <div className="flex h-16 justify-between items-center">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" id="cypress-btn-home-redirect">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              {token && user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-2"
                    >
                      <div className="relative">
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-700 font-medium dark:text-white">
                            {user.name}
                          </span>
                          <span className="block h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                            <img
                              src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
                              alt={user.name}
                              className="h-full w-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>

                    {token && user && (
                      <DropdownMenuItem >
                        <Link href="/products">Products</Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
