# NWUNET 自动连接工具

由于 NWUNET 没有自动连接功能且一段时间没有流量就会自动下线，故编写此工具。

## 运行环境

- win10 or win11 x64
- Chromium Edge
- nodejs >= 14

## 开始使用

### 安装

```ps
npm i -g @milowang/nwunet
```

### 显示帮助

```ps
nwunet help
```

### 命令行登录

```ps
nwunet -u your_username -p your_password
```

### 每天4点登录

```ps
nwunet -u your_username -p your_password -c '0 0 4 * * *'
```

