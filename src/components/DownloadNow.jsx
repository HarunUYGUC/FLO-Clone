export default function DownloadNow({ url }) {
  return (
    <span>
      Mobil Uygulamayı{" "}
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{color: "#0A0A0A" }}
      >
        <strong>Hemen İndir</strong>
      </a>
    </span>
  );
}
