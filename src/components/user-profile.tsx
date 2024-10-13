import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { UserRound } from "lucide-react";
import { LoginForm } from "./login-form";
import { DropdownMenuItem } from "./ui/dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export function UserProfile() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="block">
          <UserRound className="block rounded-full bg-secondary" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuArrow />
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>

          <DialogTrigger asChild>
            <DropdownMenuItem>
              <span>Login</span>
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-4xl">Log In</DialogTitle>
        </DialogHeader>
        <LoginForm />

        {/* <DialogContent>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </DialogContent> */}

        <DialogFooter className="mt-4">
          <Button className="h-14 w-full rounded-3xl" type="submit">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
