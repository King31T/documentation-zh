# getcandelegatedmaxsize

TRON API 方法，用于检索账户可委托的带宽和能量资源的最大数量。

## HTTP 请求

`POST /wallet/getcandelegatedmaxsize`

## 支持的路径

- `/wallet/getcandelegatedmaxsize`
- `/walletsolidity/getcandelegatedmaxsize`

## 参数

- owner_address — 要查询最大委托容量的账户地址
- type — 资源类型：0 表示带宽，1 表示能量
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- max_size — 可委托指定资源类型的最大数量

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getcandelegatedmaxsize \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "type": 0,
  "visible": true
}
'
```

## 使用场景

- 在尝试资源委托前确定委托容量
- 构建带有委托限制的用户界面
- 实现资源委托验证
- 规划资源共享策略
- 防止因容量不足导致委托失败
