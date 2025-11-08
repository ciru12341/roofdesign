

export default function Videocontainer({ src, }: { src?: string }) {
  return (

    <video
      className="w-full max-w-[940px] aspect-video h-auto"
      controls
      preload="metadata"
      playsInline
      src={src}
    >
      Your browser does not support the video tag.
    </video>
  )
}
