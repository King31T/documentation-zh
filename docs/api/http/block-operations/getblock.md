# getblock

TRON API 方法，用于通过区块编号或区块哈希从 TRON 区块链检索详细区块信息。

## HTTP 请求

`POST /wallet/getblock`

## 支持的路径

- `/wallet/getblock`
- `/walletsolidity/getblock`

## 参数

- id_or_num — 要检索的区块哈希（十六进制字符串）或区块编号
- detail — 可选布尔值。为 true 时，返回详细的交易信息。默认为 false。
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- blockID — 区块哈希
- block_header — 区块头信息，包括：
  - raw_data — 原始头数据，含时间戳、编号、父哈希等
  - witness_signature — 区块生产者签名
- transactions — 区块中的交易数组（detail=true 时为详细信息）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getblock \
  --header 'Content-Type: application/json' \
  --data '
{
  "id_or_num": "66677878",
  "detail": true,
  "visible": true
}
'
```

### 返回

```json
{
  "blockID": "<string>",
  "block_header": {
    "raw_data": {},
    "witness_signature": "<string>"
  },
  "transactions": [
    {}
  ]
}
```

## 使用场景

- 检索特定区块信息进行分析
- 构建区块浏览器和区块链可视化工具
- 验证区块内容和交易包含情况
- 监控特定区块高度的区块链状态
- 分析区块生产模式和时间
