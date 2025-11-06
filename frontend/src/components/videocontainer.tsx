

export default function Videocontainer({ src }: { src?: string }) {
  return (
    <video
      className="h-full w-full"
      controls
      preload="metadata"
      playsInline
      src={src}
    >
      Your browser does not support the video tag.
    </video>
  )
}
