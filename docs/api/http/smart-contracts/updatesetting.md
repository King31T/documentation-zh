# updatesetting

TRON API 方法，用于更新智能合约的用户资源消耗百分比设置。此设置确定执行合约时应消耗合约调用者多大比例的资源（带宽和能量）。

## HTTP 请求

`POST /wallet/updatesetting`

## 支持的路径

- `/wallet/updatesetting`

## 参数

- owner_address — 可以更新设置的合约所有者地址
- contract_address — 要更新设置的智能合约地址
- consume_user_resource_percent — 要消耗的调用者资源百分比（0-100）
- visible — 布尔值，表示是否使用可读（Base58）地址格式而非十六进制

## 返回值

- visible — 布尔值，表示地址是否为可读格式
- txID — 设置更新交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 含合约更新详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/updatesetting \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "consume_user_resource_percent": 10,
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

- 调整智能合约执行的资源消耗模式。
- 通过控制用户与合约所有者资源使用来优化合约成本。
- 管理合约和用户之间的能量和带宽分配。
- 为合约交互实施不同的定价模型。
- 微调合约经济和用户体验权衡。
- 设置合约以对调用者更友好或更少消耗资源。
