## Dependency Installation

```bash
pnpm add @mui/icons-material@^5.8.0 @mui/material@^5.8.0 @mui/styled-engine@^5.14.17 @mui/styles@^5.8.0 @mui/system@7.1.1 @mui/x-data-grid@^5.11.1 @mui/x-date-pickers@^5.0.0-beta.0 @reduxjs/toolkit@^1.8.1 axios@^0.27.2 chart.js@^3.0.0 clipboard-copy@^4.0.1 crypto-js@^4.1.1 events@^3.3.0 partner-local-lib@1.0.0 partner-oidc-auth@1.0.0 partner-oidc-auth-ui@1.0.1 react@^17.0.2 react-avatar-edit@^1.2.0 react-chartjs-2@^4.3.1 react-dom@^17.0.2 react-dropzone@^14.2.1 react-spring@^9.4.5 reactstrap@^9.0.2 redux@^4.2.0
```

## Git

```bash
git add .; git commit -m "update"; git push
```

## 📦 Build npm - dinocollab-core

```
npm version <patch|minor|major>
npm run build
cd dist
npm publish
```

| Lệnh                | Tác dụng                                |
| ------------------- | --------------------------------------- |
| `npm version patch` | Tăng `PATCH` (ví dụ: `1.2.3` → `1.2.4`) |
| `npm version minor` | Tăng `MINOR` (ví dụ: `1.2.3` → `1.3.0`) |
| `npm version major` | Tăng `MAJOR` (ví dụ: `1.2.3` → `2.0.0`) |

> 💡 Mỗi lệnh npm version sẽ tự động cập nhật package.json.

Bạn có thể thêm tuỳ chọn --no-git-tag-version nếu không muốn tạo git tag:

```
npm version <patch|minor|major> --no-git-tag-version
```
