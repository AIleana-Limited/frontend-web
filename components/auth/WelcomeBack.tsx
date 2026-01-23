"use client";

import { useEffect, useMemo, useState } from "react";
import { Eye, EyeOff, Fingerprint, Grid3X3, ScanFace, User } from "lucide-react";
import Image from "next/image";
import { Avatar } from "@/app/assest/images";
import { LuBolt } from "react-icons/lu";

type SignInOptions = {
  profile: boolean;
  fingerprint: boolean;
  faceId: boolean;
  pin: boolean;
};

type Method = "profile" | "fingerprint" | "faceId" | "pin";

const KEY = "alleana_signin_options";

function IconBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`grid h-12 w-12 place-items-center rounded-xl transition ${
        active
          ? "bg-blue-600/70 text-(--text-primary)"
          : "bg-white/5 text-(--text-primary)/70 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

export default function WelcomeBack() {
  const [showPin, setShowPin] = useState(false);

  const [options, setOptions] = useState<SignInOptions>({
    profile: true,
    fingerprint: true,
    faceId: false,
    pin: false,
  });

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;

    try {
      setOptions((prev) => ({ ...prev, ...JSON.parse(raw) }));
    } catch {}
  }, []);

  const enabledMethods = useMemo(() => {
    const arr: Method[] = [];
    if (options.profile) arr.push("profile");
    if (options.faceId) arr.push("faceId");
    if (options.fingerprint) arr.push("fingerprint");
    if (options.pin) arr.push("pin");
    return arr;
  }, [options]);

  const [selected, setSelected] = useState<Method>("profile");

  const active = enabledMethods.includes(selected) ? selected : enabledMethods[0];

  if (enabledMethods.length === 0) {
    return (
      <div className="w-full max-w-md text-center text-(--text-primary)/70">
        No sign in options selected.
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-(--text-primary)/80">
          <div className="h-9 w-9 rounded-xl bg-white/10 flex justify-center items-center"><LuBolt /></div>
          <span className="text-lg font-medium">Alleana</span>
        </div>

        <button className="text-sm text-(--text-primary)/70 underline underline-offset-4 hover:text-(--text-primary)">
          Sign Up
        </button>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-4xl font-semibold text-(--text-primary)">Great to see you again!</h1>
      <p className="mt-2 text-sm text-(--text-primary)/55">Pick up where you left off.</p>

      {/* Avatar + name */}
      <div className="mt-10 flex flex-col items-center">
        <div className= "relative h-16 w-16 overflow-hidden rounded-full bg-white/10">
        <Image src={Avatar.src} alt="avatar" fill className="object-cover"/>
        </div>
        <p className="mt-4 text-lg font-semibold text-(--text-primary)">James Ranger</p>
      </div>

      {/* Content switching */}
      <div className="mt-6">
        {/* PIN */}
        {active === "pin" && (
          <div className="space-y-2">

            <div className="flex h-12 max-w-sm mx-auto items-center rounded-xl border border-white/10 bg-white/5 px-4 focus-within:border-blue-500/60">
              <input
                type={showPin ? "text" : "password"}
                placeholder="Enter your pin"
                className="h-full w-full bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-primary)/30"
              />
              <button
                type="button"
                onClick={() => setShowPin((p) => !p)}
                className="text-(--text-primary)/40 hover:text-(--text-primary)/70"
              >
                {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <p className="pt-4 text-center text-sm text-(--text-primary)/70">
             Enter Your Pin to SignIn 
            </p>
          </div>
        )}

        {/* Fingerprint */}
        {active === "fingerprint" && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-blue-500">
              <Fingerprint size={35} />
            </div>

            <p className="text-center text-sm text-(--text-primary)/70">
              To sign in, scan your finger on the fingerprint reader
            </p>
          </div>
        )}

        {/* FaceID */}
        {active === "faceId" && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-blue-500">
              <ScanFace size={35} />
            </div>

            <p className="text-center text-sm text-(--text-primary)/70">
              Confirm using facial recognition
            </p>
          </div>
        )}

        {/* Profile */}
        {active === "profile" && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-blue-500">
              <User size={35} />
            </div>

            <p className="text-center text-sm text-(--text-primary)/70">
              Continue with your profile sign in
            </p>
          </div>
        )}
      </div>

      {/* Bottom options icons */}
      <div className="mt-12">
        <p className="text-center text-xs text-(--text-primary)/40">Sign in options</p>

        <div className="mt-4 flex justify-center gap-3">
          {options.profile && (
            <IconBtn active={active === "profile"} onClick={() => setSelected("profile")}>
              <User size={18} />
            </IconBtn>
          )}

          {options.faceId && (
            <IconBtn active={active === "faceId"} onClick={() => setSelected("faceId")}>
              <ScanFace size={18} />
            </IconBtn>
          )}

          {options.fingerprint && (
            <IconBtn active={active === "fingerprint"} onClick={() => setSelected("fingerprint")}>
              <Fingerprint size={18} />
            </IconBtn>
          )}

          {options.pin && (
            <IconBtn active={active === "pin"} onClick={() => setSelected("pin")}>
              <Grid3X3 size={18} />
            </IconBtn>
          )}
        </div>
      </div>
    </div>
  );
}
