# proposalapprove

TRON API 方法，允许超级代表批准治理提案。提案需要超级代表的多数批准才能执行。

## HTTP 请求

`POST /wallet/proposalapprove`

## 支持的路径

- `/wallet/proposalapprove`

## 参数

- owner_address — 批准提案的超级代表地址，可以是 base58 或十六进制格式
- proposal_id — 要批准的提案 ID
- is_add_approval — 布尔值，表示是批准（true）还是撤销批准（false）
- visible — 可选布尔参数。设置为 true 时，地址应为 base58 格式。默认为 false。

## 返回值

- txID — 批准操作的交易哈希
- raw_data — 原始交易数据
- raw_data_hex — 十六进制格式的原始交易数据
- signature — 交易签名数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/proposalapprove \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "proposal_id": 1,
  "is_add_approval": true,
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

- 超级代表批准治理提案。
- 参与提案投票流程。
- 支持或反对拟议的网络参数变更。
- 在治理工作流中管理提案批准状态。
