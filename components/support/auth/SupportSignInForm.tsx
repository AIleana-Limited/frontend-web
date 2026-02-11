"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import FormInput from "@/features/auth/form/FormInput";
import FormPassword from "@/features/auth/form/FormPassword";
import { LuBolt } from "react-icons/lu";
import { supportSignInSchema, SupportSignInSchema } from "@/schemas/support-auth-schemas";

export default function SupportSignInForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SupportSignInSchema>({
    resolver: zodResolver(supportSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: SupportSignInSchema) => {
    console.log(values);
    // TODO: call your API
  };

  return (
    <div className="w-full space-y-4">
      {/* Top header */}
      <div className="flex  flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-(--text-primary)/90">
          <div className="h-10 w-10 rounded-lg bg-(--surface-1) flex 
          justify-center items-center"><LuBolt /></div>
          <span className="font-semibold text-2xl">Ops</span>
        </div>
         <h1 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-(--text-primary)">Sign in to your agent account</h1>
      <p className="mt-3 text-sm text-white bg-[#6155F5] rounded-sm px-3 py-2 ">Agent</p>
      </div>

     

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        

        {/* Email */}
        <FormInput
          control={control}
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          className="font-medium"
        />

        {/* Password */}
        <FormPassword
          control={control}
          name="password"
          label="Enter Password"
          placeholder="Enter your account password"
          className="font-medium"
        />

        {/* Continue button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-3 h-12 w-full rounded-xl bg-blue-900/80 text-sm font-medium text-white/80
          transition hover:bg-blue-900 disabled:opacity-60"
        >
          {isSubmitting ? "Please wait..." : "Login"}
        </button>

      </form>
    </div>
  );
}
