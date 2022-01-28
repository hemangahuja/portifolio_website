/** @type {import('next').NextConfig} */
const JC = "https://just-chatting-lac.vercel.app/";
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/just_chatting',
        destination: `${JC}`,
      },
      {
        source: '/just_chatting/:path*',
        destination: `${JC}/:path*`,
      },
    ]
  },
}