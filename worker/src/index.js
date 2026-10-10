const SERVICE_NAME = "sepidar-restaurant-api";

function allowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function responseHeaders(request, env) {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Vary": "Origin",
  });

  const origin = request.headers.get("Origin");
  if (origin && allowedOrigins(env).includes(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    headers.set("Access-Control-Max-Age", "600");
  }

  return headers;
}

function jsonResponse(request, env, data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: responseHeaders(request, env),
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: responseHeaders(request, env),
      });
    }

    if (method !== "GET") {
      return jsonResponse(
        request,
        env,
        {
          ok: false,
          error: "method_not_allowed",
          message: "This initial scaffold currently exposes read-only health routes.",
        },
        405,
      );
    }

    if (url.pathname === "/" || url.pathname === "/health") {
      return jsonResponse(request, env, {
        ok: true,
        service: SERVICE_NAME,
        status: "scaffold_ready",
        businessApiReady: false,
        message: "The Worker is reachable. Customer-ordering APIs and database bindings have not been implemented yet.",
        timestamp: new Date().toISOString(),
      });
    }

    return jsonResponse(
      request,
      env,
      {
        ok: false,
        error: "not_found",
        message: "This route has not been implemented.",
      },
      404,
    );
  },
};
