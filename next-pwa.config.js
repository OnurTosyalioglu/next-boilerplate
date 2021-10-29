module.exports = {
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
  },
}
