import React from "react";
//import Image from "next/image";
//import FooterSocials from "./FooterSocials";
//import Link from "next/link";
//import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container" style={{ marginTop: "-80px" }}>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>Copyright © afdindia {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <a href="https://afdindia.com/page/privacy-policy" target="_blank">
              Privacy Policy
            </a>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top">
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
