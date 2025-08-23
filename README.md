# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


<!-- git分支操作 -->
# 删除本地分支（以 feature/xxx 为例）
git branch -d feature/xxx

# 强制删除本地分支（如未合并）
git branch -D feature/xxx

# 清理本地已被远程删除的分支引用
git fetch -p

# 查看远程所有分支
git branch -r

# 同时查看本地和远程所有分支
git branch -a

# 强制覆盖远程
git push --force

# 撤销最近一次提交，保留工作区和暂存区的修改
git reset --soft HEAD~1

# 在bash中设置git超时时间
# 定义了 Git 认为网络连接“太慢”的最低速度阈值（单位是 字节/秒）。
git config --global http.lowSpeedLimit 0
# 设置定义将一个巨大的值（约 11.5 天）设置为超时时间。
git config --global http.lowSpeedTime 999999
# 向远程仓库传输数据（主要是 git push）时，所使用的内存缓冲区的大小。单位是字节（Byte）。 500 MiB
git config --global http.postBuffer 524288000


Navicat
jiabinleo@237.com
Lijiabin.6341
