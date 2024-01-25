/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  /* bug:tailwindcss与ant design样式冲突,两处更改:https://www.cnblogs.com/sxliu414/p/17816969.html */
  corePlugins: {
    preflight: false,
  },
};
