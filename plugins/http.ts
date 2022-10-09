interface RequestOptions {
  url: string;
  method: string;
  data: Record<string, object>;
  params: Record<string, object>;
}

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp

  nuxtApp.provide("hello", (name) => `Hello ${name}!`);
  nuxtApp.provide("http", ({ url, method, data, params }: RequestOptions) => {
    return new Promise((resolve: Function, reject: Function) => {
      $fetch(url, {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        method,
        body: data,
        async onRequest({ request, options }) {
          // Log request
          console.log("[fetch request]", request, options);

          // Add `?t=1640125211170` to query search params
          options.query = params || {};
          options.query.t = new Date();
        },
        async onRequestError({ request, options, error }) {
          // Log error
          console.log("[fetch request error]", request, error);
        },
        async onResponse({ request, response, options }) {
          // Log response
          console.log(
            "[fetch response]",
            request,
            response.status,
            response.body
          );
          resolve(response);
        },
        async onResponseError({ request, response, options }) {
          // Log error
          console.log(
            "[fetch response error]",
            request,
            response.status,
            response.body
          );
          reject(response);
        },
      });
    });
  });
});
