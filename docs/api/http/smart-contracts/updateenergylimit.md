# updateenergylimit

TRON API 方法，用于更新智能合约的原始能量限制。此设置确定合约创建者为合约执行提供的最大能量数量，影响用户调用合约时需要提供的能量数量。

## HTTP 请求

`POST /wallet/updateenergylimit`

## 支持的路径

- `/wallet/updateenergylimit`

## 参数

- owner_address — 可以更新能量限制的合约所有者地址
- contract_address — 要更新能量限制的智能合约地址
- origin_energy_limit — 合约创建者提供的最大能量数量（单位：能量，非 TRX/sun）
- visible — 布尔值，表示是否使用可读（Base58）地址格式而非十六进制

## 返回值

- visible — 布尔值，表示地址是否为可读格式
- txID — 能量限制更新交易的唯一交易 ID
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
  --url https://api.shasta.trongrid.io/wallet/updateenergylimit \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "origin_energy_limit": 100000000,
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

- 为合约用户设置能量补贴以改善用户体验。
- 通过控制能量分配管理合约执行成本。
- 通过调整能量提供策略优化合约经济。
- 实现基本操作受补贴的免费增值模型。
- 平衡合约所有者成本与用户可访问性。
- 根据合约使用模式和反馈调整能量限制。
