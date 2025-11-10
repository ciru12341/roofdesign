

export default function Videocontainer({ src, className }: { src?: string, className?: string }) {
  return (

    <video
      className={className ? className : `w-full max-w-[940px] aspect-video h-auto`}
      controls
      preload="metadata"
      playsInline
      src={src}
    >
      Your browser does not support the video tag.
    </video>
  )
}
