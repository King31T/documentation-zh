# proposaldelete

TRON API 方法，允许提案创建者在提案进入执行阶段前删除或取消治理提案。

## HTTP 请求

`POST /wallet/proposaldelete`

## 支持的路径

- `/wallet/proposaldelete`

## 参数

- owner_address — 要删除提案的创建者地址，可以是 base58 或十六进制格式
- proposal_id — 要删除的提案 ID
- visible — 可选布尔参数。设置为 true 时，地址应为 base58 格式。默认为 false。

## 返回值

- txID — 提案删除的交易哈希
- raw_data — 原始交易数据
- raw_data_hex — 十六进制格式的原始交易数据
- signature — 交易签名数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/proposaldelete \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "proposal_id": 1,
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

- 取消不再需要的提案。
- 撤回有错误或参数不正确的提案。
- 在治理系统中管理提案生命周期。
- 防止不需要的提案进入执行阶段。
