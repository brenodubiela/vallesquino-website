import { PageLoader } from "@/components/layout/page-loader";

export default function SiteTemplate({ children }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}
