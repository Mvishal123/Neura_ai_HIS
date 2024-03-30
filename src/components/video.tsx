export function Video() {
  return (
    <div className="shadow-xl">
      <video width="100%" height="100%" loop muted autoPlay>
        <source src="/terminal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
