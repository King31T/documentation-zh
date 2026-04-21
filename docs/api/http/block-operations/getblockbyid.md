# getblockbyid

TRON API 方法，使用区块 ID（哈希）从 TRON 区块链检索特定区块。该方法允许获取特定区块的详细信息，包括区块头、交易和元数据。

## HTTP 请求

`POST /wallet/getblockbyid`

## 支持的路径

- `/wallet/getblockbyid`
- `/walletsolidity/getblockbyid`

## 参数

- value — 要检索的区块 ID（哈希），十六进制格式

## 返回值

- blockID — 区块哈希标识符
- block_header — 区块头信息，包含：
  - raw_data — 原始区块头数据，包括：
    - timestamp — 区块生成时间戳（毫秒）
    - txTrieRoot — 交易 trie 根哈希
    - parentHash — 父区块哈希
    - number — 区块高度/编号
    - witness_address — 区块生产者（见证人）地址
    - version — 区块版本
  - witness_signature — 区块生产者的数字签名
- transactions — 区块中所有交易的数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getblockbyid \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "0000000000f4245300b88ffeb9bdb95b88c66b5ce6bb0ee79d85d5ce14b6a2a7ca"
}
'
```

### 返回

```json
{
  "blockID": "<string>",
  "block_header": {
    "raw_data": {
      "timestamp": 123,
      "txTrieRoot": "<string>",
      "parentHash": "<string>",
      "number": 123,
      "witness_address": "<string>",
      "version": 123
    },
    "witness_signature": "<string>"
  },
  "transactions": [
    {}
  ]
}
```

## 使用场景

- 通过哈希检索特定区块的详细信息。
- 构建需要按 ID 显示区块详情的区块浏览器。
- 验证特定区块的内容和交易。
- 分析历史区块链数据，用于审计和合规目的。
- 实现需要通过标识符获取区块的区块链同步工具。
