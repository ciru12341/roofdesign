
export default function Videocontainer({ src, className }: { src: string, className?: string }) {

  return (
    (src.includes("youtube.com") || src.includes("youtu.be")) ?
      <iframe
        className={className ? className : `w-full max-w-[940px] aspect-video h-auto`}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      :
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
