"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Fingerprint, Grid3X3, ScanFace, User } from "lucide-react";
import { LuBolt } from "react-icons/lu";

type SignInOptions = {
  profile: boolean;
  fingerprint: boolean;
  faceId: boolean;
  pin: boolean;
};

const KEY = "alleana_signin_options";

const DEFAULTS: SignInOptions = {
  profile: true,
  fingerprint: true,
  faceId: false,
  pin: false,
};

function Toggle({ checked }: { checked: boolean }) {
  return (
    <div
      className={`relative h-7 w-12 rounded-full border transition ${
        checked ? "border-blue-500/60 bg-blue-600/60" : "border-white/10 bg-white/10"
      }`}
    >
      <div
        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
  active,
  checked,
  onToggle,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  active: boolean;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        active ? "border-blue-500/60 bg-white/5" : "border-white/10 bg-white/5"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/40 text-(--text-primary)/80">
            {icon}
          </div>

          <div>
            <p className="text-sm font-semibold text-(--text-primary)">{title}</p>
            <p className="mt-1 text-xs text-(--text-primary)/50">{desc}</p>
          </div>
        </div>

        <Toggle checked={checked} />
      </div>
    </button>
  );
}

export default function SignInOptions() {
  const router = useRouter();

  const { watch, setValue, reset } = useForm<SignInOptions>({
    defaultValues: DEFAULTS,
    mode: "onChange",
  });

  // Load saved settings
  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;

    try {
      reset({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {}
  }, [reset]);

  const values = watch();
  const anySelected = Object.values(values).some(Boolean);

  const save = () => {
    localStorage.setItem(KEY, JSON.stringify(values));
    router.push("/welcome-back");
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-2 text-(--text-primary)/80">
        <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center"><LuBolt /></div>
        <span className="text-lg font-medium">Alleana</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold text-(--text-primary)">Sign in options</h1>
      <p className="mt-2 text-sm text-(--text-primary)/55">
        Select the methods that works perfectly for a smooth sign in experience
      </p>

      <p className="mt-6 text-sm text-(--text-primary)/60">Choose how you’d like to proceed</p>

      <div className="mt-3 space-y-3">
        <Card
          title="Profile"
          desc="Use your email/phone number to sign in"
          icon={<User size={18} />}
          active={values.profile}
          checked={values.profile}
          onToggle={() => setValue("profile", !values.profile)}
        />

        <Card
          title="Fingerprint"
          desc="Use system preset fingerprint to sign in"
          icon={<Fingerprint size={18} />}
          active={values.fingerprint}
          checked={values.fingerprint}
          onToggle={() => setValue("fingerprint", !values.fingerprint)}
        />

        <Card
          title="Facial Recognition"
          desc="We’ll reach out to you"
          icon={<ScanFace size={18} />}
          active={values.faceId}
          checked={values.faceId}
          onToggle={() => setValue("faceId", !values.faceId)}
        />

        <Card
          title="Pin"
          desc="Use a unique pin just for you"
          icon={<Grid3X3 size={18} />}
          active={values.pin}
          checked={values.pin}
          onToggle={() => setValue("pin", !values.pin)}
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <button
          type="button"
          className="h-12 rounded-xl border border-blue-500/40 bg-transparent text-sm font-medium
          text-(--text-primary)/80 transition hover:border-blue-500/70 hover:bg-white/5"
        >
          Skip
        </button>

        <button
          type="button"
          onClick={save}
          disabled={!anySelected}
          className={`h-12 rounded-xl bg-blue-700/70 text-sm font-medium text-(--text-primary)/90 transition
          ${!anySelected ? "cursor-not-allowed opacity-40" : "hover:bg-blue-700"}`}
        >
          Saved
        </button>
      </div>
    </div>
  );
}
