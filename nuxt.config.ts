export default defineNuxtConfig({
  rootDir: __dirname,
  nitro: {
    preset: "aws-lambda",
    serveStatic: true,
  },
  app: {
    cdnURL: "http://192.168.1.7:9090/",
  },
});
