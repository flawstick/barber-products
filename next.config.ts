import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Create next intl config
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
