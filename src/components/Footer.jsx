import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer id="footer" className="py-8 mt-15 bg-slate-100">
      <div className="container mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/appy-spec"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500 hover:cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <GitHubIcon fontSize="large" />
          </a>

          <a
            href="https://www.linkedin.com/in/rahul-patel-70265126b"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500 hover:cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>

        <p className="text-sm text-gray-600 text-center">
          Designed & Built by{" "}
          <span className="font-semibold text-black">Rahul Patel</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
