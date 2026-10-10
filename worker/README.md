# Sepidar API Worker

این پوشه به‌عنوان Root directory مستقل برای Cloudflare Workers Builds در نظر گرفته شده است.

- تنظیمات استقرار: `wrangler.jsonc`
- ورودی Worker: `src/index.js`
- نام Worker: `sepidar-restaurant-api`
- مسیرهای فعلی: `GET /` و `GET /health`

این کد فقط اسکلت اولیه و مسیرهای بررسی سلامت را فراهم می‌کند؛ API سفارش‌ها، D1، حساب کاربران، پنل رستوران و سایر قابلیت‌های تجاری هنوز اضافه نشده‌اند.

برای توسعه محلی، پس از نصب Node.js و وابستگی‌ها، از `npm install` و سپس `npm run dev` استفاده کنید. برای استقرار دستی از `npm run deploy` استفاده می‌شود. در اتصال GitHub به Cloudflare Workers Builds، Root directory را `worker` قرار دهید.
