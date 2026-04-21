# getnowblock

TRON API 方法，用于从 TRON 区块链检索当前最新区块。该方法返回最近生产的区块及其所有交易和元数据。

## HTTP 请求

`POST /wallet/getnowblock`

## 支持的路径

- `/wallet/getnowblock`
- `/walletsolidity/getnowblock`

## 参数

该方法不接受任何参数。

## 返回值

- blockID — 区块哈希标识符
- block_header — 区块头信息，包含：
  - raw_data — 原始区块头数据，包括：
    - timestamp — 区块生成时间戳
    - txTrieRoot — 交易 trie 根哈希
    - parentHash — 父区块哈希
    - number — 区块高度
    - witness_address — 区块生产者地址
    - version — 区块版本
  - witness_signature — 区块生产者签名
- transactions — 区块中包含的交易数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getnowblock \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### 返回

```json
{
  "blockID": "<string>",
  "block_header": {
    "raw_data": {},
    "witness_signature": "<string>"
  },
  "transactions": "<array>"
}
```

## 使用场景

- 实时监控区块链的最新状态。
- 检索当前区块高度和最新交易。
- 将应用程序与区块链当前状态进行同步。
- 实现区块浏览器和监控工具。
- 监测新交易的确认情况。
