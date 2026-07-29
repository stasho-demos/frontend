import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emits out/<route>/index.html rather than out/<route>.html. IPFS gateways
  // resolve a directory to its index.html but do not resolve extensionless
  // paths, so this is what keeps deep links working when served from a CID.
  trailingSlash: true,
};

export default nextConfig;
