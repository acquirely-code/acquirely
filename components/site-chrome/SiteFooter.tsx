import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { withImgDims } from "@/lib/img-dims";
import { siteFooter } from "./markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/(home)/(default)/home.css";
import "./site-chrome.css";

const html = withImgDims(siteFooter(false));

// The homepage footer for non-homepage routes.
export default function SiteFooter() {
  return (
    <div
      className={`ecom hm sc sc-foot ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
