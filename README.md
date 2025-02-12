# DuitKu - Aplikasi Frontend

DuitKu adalah aplikasi yang dibangun menggunakan React + TypeScript + Vite untuk mengelola keuangan pribadi.

## Teknologi yang Digunakan

Proyek ini menggunakan beberapa teknologi utama:

- React 18.3
- TypeScript
- Vite
- ESLint untuk menjaga kualitas kode

## Cara Menjalankan Aplikasi

1. Pastikan Node.js sudah terinstall di komputer Anda
2. Clone repository ini
3. Buka terminal dan masuk ke folder proyek
4. Install dependencies:

```bash
npm install
```

5. Jalankan aplikasi dalam mode development:

```bash
npm run dev
```

6. Buka browser dan akses `http://localhost:5173`

## Build untuk Production

Untuk membuild aplikasi untuk production:

```bash
npm run build
```

## Konfigurasi ESLint

Jika Anda ingin mengembangkan aplikasi untuk production, berikut cara mengkonfigurasi ESLint:

1. Atur `parserOptions` di file konfigurasi ESLint:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

2. Tambahkan plugin React dengan menginstall:

```bash
npm install eslint-plugin-react --save-dev
```

3. Update konfigurasi ESLint:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  settings: { react: { version: "18.3" } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Fitur Hot Module Replacement (HMR)

Aplikasi ini mendukung Hot Module Replacement menggunakan:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) dengan Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) dengan SWC
