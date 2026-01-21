"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema, type CreateAccountSchema } from '@/schemas/auth-schemas'

import FormInput from "@/components/form/FormInput";
import FormPassword from "@/components/form/FormPassword";
import FormDivider from "@/components/form/FormDivider";
import SocialButton from "@/components/form/SocialButton";

import { AiOutlineGoogle } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa";
import { LuBolt } from "react-icons/lu";

export default function CreateAccountForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: CreateAccountSchema) => {
    console.log(values);
    // TODO: call your API
  };

  return (
    <div className="w-full space-y-4">
      {/* Top header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <div className="h-8 w-8 rounded-lg bg-white/10 flex 
          justify-center items-center"><LuBolt /></div>
          <span className="font-medium">Alleana</span>
        </div>

        <button className="text-sm text-(--text-primary) hover:text-white underline underline-offset-4">
          Sign In
        </button>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Create Account</h1>
      <p className="mt-2 text-sm text-(--text-primary)/80">Tell us about yourself.</p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {/* First + Last name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            control={control}
            name="firstName"
            label="First Name"
            placeholder="Enter your First name"
          />
          <FormInput
            control={control}
            name="lastName"
            label="Last Name"
            placeholder="Enter your Last name"
          />
        </div>

        {/* Email */}
        <FormInput
          control={control}
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
        />

        {/* Password */}
        <FormPassword
          control={control}
          name="password"
          label="Password"
          placeholder="Create a secure password"
        />

        {/* Confirm Password */}
        <FormPassword
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Re-enter password"
        />

        {/* Continue button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-3 h-12 w-full rounded-xl bg-blue-900/80 text-sm font-medium text-white/80
          transition hover:bg-blue-900 disabled:opacity-60"
        >
          {isSubmitting ? "Creating..." : "Continue"}
        </button>

        {/* Terms */}
        <p className="text-center text-xs text-(--text-primary)/50">
          By continuing, you accept our{" "}
          <a className="text-blue-400 hover:underline" href="#">
            Terms
          </a>{" "}
          and{" "}
          <a className="text-blue-400 hover:underline" href="#">
            Privacy Policy
          </a>
        </p>

        <FormDivider />

        {/* Socials */}
        <div className="space-y-3 max-w-md mx-auto">
          <SocialButton icon={<AiOutlineGoogle size={18} />} text="Sign up with google" />
          <SocialButton icon={<IoLogoApple size={18} />} text="Sign up with Apple" />
          <SocialButton icon={<FaMicrosoft size={18} />} text="Sign up with Microsoft" />
        </div>
      </form>
    </div>
  );
}
