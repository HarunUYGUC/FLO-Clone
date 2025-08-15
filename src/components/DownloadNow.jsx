export default function DownloadNow({ url }) {
  return (
    <span>
      Mobil Uygulamayı{" "}
      <a 
        href={url} 
        style={{color: "#0A0A0A" }}
      >
        <strong>Hemen İndir</strong>
      </a>
    </span>
  );
}
