# proposalcreate

TRON API 方法，在 TRON 网络上创建新的治理提案。超级代表可以使用此方法提议更改网络参数。

## HTTP 请求

`POST /wallet/proposalcreate`

## 支持的路径

- `/wallet/proposalcreate`

## 参数

- owner_address — 创建提案的超级代表地址，可以是 base58 或十六进制格式
- parameters — 包含提案参数 ID 及其新值的对象
- visible — 可选布尔参数。设置为 true 时，地址应为 base58 格式。默认为 false。

## 返回值

- txID — 提案创建的交易哈希
- raw_data — 原始交易数据
- raw_data_hex — 十六进制格式的原始交易数据
- signature — 交易签名数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/proposalcreate \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "parameters": {
    "0": 3000000
  },
  "visible": true
}
'
```

### 返回

```json
{
  "txID": "<string>",
  "raw_data": {
    "contract": "<array>",
    "ref_block_bytes": "<string>",
    "ref_block_hash": "<string>",
    "expiration": 123,
    "timestamp": 123
  },
  "raw_data_hex": "<string>",
  "signature": [
    "<string>"
  ]
}
```

## 使用场景

- 创建修改网络参数的治理提案。
- 提议更改交易费用和资源成本。
- 发起协议升级和参数调整。
- 参与 TRON 的去中心化治理系统。
