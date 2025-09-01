export default function Footer({
  brand = "AlgoVoice",
  description = "Empowering minds to capture, connect, and cultivate breakthrough thinking.",
  columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
  ],
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="footer" role="contentinfo" aria-label={`${brand} footer`}>
      <div className="inner">
        <div className="grid">
          <div className="brand">
            <div className="logo-row">
              <div className="logo-dot" aria-hidden="true" />
              <span className="brand-name">{brand}</span>
            </div>
            <p className="desc">{description}</p>
          </div>

          {columns.map((col, i) => (
            <nav key={i} className="col" aria-labelledby={`footer-col-${i}`}>
              <h4 id={`footer-col-${i}`} className="col-title">
                {col.title}
              </h4>
              <ul className="list">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a className="link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="bottom">
          <p className="copyright">
            {"\u00A9"} {year} {brand}. All rights reserved.
          </p>
          <div className="policies">
            <a className="link" href="#">
              Terms
            </a>
            <span className="dot" aria-hidden="true">
              {"\u00B7"}
            </span>
            <a className="link" href="#">
              Privacy
            </a>
            <span className="dot" aria-hidden="true">
              {"\u00B7"}
            </span>
            <a className="link" href="#">
              Status
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: transparent;
          border-top: 1px solid #1a1a1a;
          color: #cfcfcf;
        }
        .inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 48px 16px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1.2fr repeat(3, 1fr);
          gap: 32px;
        }
        .brand {
          min-width: 240px;
        }
        .logo-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .logo-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
          box-shadow: 0 0 24px rgba(167, 139, 250, 0.4);
        }
        .brand-name {
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.2px;
        }
        .desc {
          margin: 0;
          color: #a8a8a8;
          font-size: 14px;
          line-height: 1.7;
        }
        .col {
          min-width: 160px;
        }
        .col-title {
          margin: 0 0 12px 0;
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }
        .link {
          display: inline-block;
          color: #cfcfcf;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #1a1a1a;
          margin-top: 32px;
          padding-top: 20px;
          gap: 12px;
          flex-wrap: wrap;
        }
        .copyright {
          margin: 0;
          color: #9a9a9a;
          font-size: 13px;
        }
        .policies {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #9a9a9a;
          font-size: 13px;
        }
        .dot {
          color: #555;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .brand {
            margin-bottom: 8px;
          }
        }
      `}</style>
    </footer>
  )
}