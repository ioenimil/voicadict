import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";
export function LoginForm() {
  return (
    <section className=" space-y-6">
      <div className="grid gap-2">
        <Label className=" text-xl" htmlFor="email">
          Email
        </Label>
        <Input
          className=" h-14 text-xl placeholder:text-xl"
          id="email"
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label className="text-xl" htmlFor="password">
          Password
        </Label>
        <Input
          className=" h-14 text-xl placeholder:text-xl"
          id="password"
          type="password"
          placeholder="pas@$word."
          required
        />
      </div>
      <div className=" w-full flex justify-between">
        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" className=" rounded-full" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
        </div>

        <Link className=" text-lg text-primary" href={"/"}>
          Forgot Password ?
        </Link>
      </div>
    </section>
  );
}
