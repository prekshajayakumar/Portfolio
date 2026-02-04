export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-[-140px] top-[20%] h-[560px] w-[560px] rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute bottom-[-220px] left-[30%] h-[640px] w-[640px] rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
    </div>
  );
}
