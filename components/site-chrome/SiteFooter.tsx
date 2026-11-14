import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { withImgDims } from "@/lib/img-dims";
import { siteFooter } from "./markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/(home)/(default)/home.css";
import "./site-chrome.css";

const html = withImgDims(siteFooter(false));

// The homepage footer for non-homepage routes. themed: follow the light/dark theme (pair with <SiteHeader themed />).
export default function SiteFooter({ themed = false }: { themed?: boolean }) {
  return (
    <div
      className={`ecom hm sc sc-foot${themed ? " sc-themed" : ""} ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
