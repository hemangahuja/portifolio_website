module.exports = {
  async rewrites() {
    return [
      {
        source: '/just_chatting/:slug*',
        destination: 'https://just-chatting-lac.vercel.app/just_chatting/:slug*', // Matched parameters can be used in the destination
      },
    ]
  },
}