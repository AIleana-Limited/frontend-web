export default function FormDivider() {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-px flex-1 bg-white/10" />
      <p className="text-xs text-white/40">Or continue with</p>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}
