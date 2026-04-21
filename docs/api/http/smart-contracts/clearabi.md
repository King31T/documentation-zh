# clearabi

TRON API 方法，用于清除（移除）智能合约的 ABI（应用程序二进制接口）信息。此操作从区块链中删除合约的 ABI 数据，使合约函数的可发现性降低，但在知道函数签名的情况下仍可执行。

## HTTP 请求

`POST /wallet/clearabi`

## 支持的路径

- `/wallet/clearabi`

## 参数

- owner_address — 可以清除 ABI 的合约所有者地址
- contract_address — 要清除 ABI 的智能合约地址
- visible — 布尔值，表示是否使用可读（Base58）地址格式而非十六进制

## 返回值

- visible — 布尔值，表示地址是否为可读格式
- txID — ABI 清除交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 含合约 ABI 清除详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/clearabi \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "visible": true
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {
    "contract": "<array>",
    "ref_block_bytes": "<string>",
    "ref_block_hash": "<string>",
    "expiration": 123,
    "timestamp": 123
  },
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 出于隐私或安全原因删除合约 ABI 信息。
- 在不再需要 ABI 信息时清理合约元数据。
- 为专有智能合约实施混淆策略。
- 管理合约在浏览器中的可见性和可发现性。
- 通过删除不必要的 ABI 数据减少链上存储。
- 为迁移或弃用流程准备合约。
