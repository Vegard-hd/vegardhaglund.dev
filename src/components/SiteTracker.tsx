export const SiteTracker = () => {
  return (
    <>
      <iframe
        sandbox=""
        plausible-embed
        src="https://required.vegardhaglund.dev/vegardhaglund.dev?embed=true&theme=dark"
        loading="lazy"
        style={{ width: "1px", minWidth: "100%", height: "1600px" }}
      ></iframe>
      <div style={{ fontSize: "14px", paddingBottom: "14px" }}>
        Stats powered by{" "}
        <a
          target="_blank"
          style={{ color: "#4F46E5", textDecoration: "underline" }}
          href="https://plausible.io"
        >
          Plausible Analytics
        </a>
      </div>
      <script
        async
        src="https://required.vegardhaglund.dev/js/embed.host.js"
      ></script>
    </>
  );
};
