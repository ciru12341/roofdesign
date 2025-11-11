export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-10 pb-20 gap-y-12">
      {children}
    </div>
  )
}