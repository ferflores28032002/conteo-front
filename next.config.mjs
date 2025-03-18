/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BELVO_SECRET_KEY_ID: "ee1531c1-a209-4f7f-be43-47e89735f0df",
    BELVO_SECRET_KEY_PASSWORD:
      "2b6A3@-7BbBMrvVEERvz#qCpN-QnLekAuDmEqKoBR*-EH3k4RES8y2VRMU7cK5CN",
    BASE_URL: "https://sandbox.belvo.com/api",

  },
  images: {
    domains: ["ggvypstbjfgzdfjrzwji.supabase.co"], // Add your image domains here
  }
};

export default nextConfig;
