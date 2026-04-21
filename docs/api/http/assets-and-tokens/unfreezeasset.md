# unfreezeasset

TRON API 方法，用于创建解冻在代币创建期间被冻结的 TRC10 代币的未签名交易。此操作将冻结的代币释放回代币发行者的可用余额。

## HTTP 请求

`POST /wallet/unfreezeasset`

## 支持的路径

- `/wallet/unfreezeasset`

## 参数

- owner_address — 发行代币并希望解冻代币的地址
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含解冻资产合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/unfreezeasset \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
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

- 在冻结期到期后释放冻结的 TRC10 代币
- 通过解冻之前锁定的代币来管理代币供应和流动性
- 构建处理冻结供应计划的代币管理工具
- 在智能合约中实现自动化代币解锁机制
