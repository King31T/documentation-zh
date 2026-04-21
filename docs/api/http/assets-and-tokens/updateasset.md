# updateasset

TRON API 方法，用于创建更新现有 TRC10 代币信息的未签名交易。该方法允许代币发行者在创建后修改代币的某些属性。

## HTTP 请求

`POST /wallet/updateasset`

## 支持的路径

- `/wallet/updateasset`

## 参数

- owner_address — 发行代币并希望更新的地址
- description — 代币项目的新描述（字符串）
- url — 代币项目的新官方网站 URL（字符串）
- new_limit — 代币发行方为代币操作提供的新带宽限制（整数，可选）
- new_public_limit — 此代币可用的新公共带宽限制（整数，可选）
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含更新资产合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/updateasset \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "description": "Updated description for the TRC10 token",
  "url": "https://updated-example.com",
  "new_limit": 2000000,
  "new_public_limit": 2000000,
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

- 更新代币项目信息，如描述和网站 URL
- 修改代币操作的带宽分配
- 构建允许发行后更新的代币管理界面
- 实现允许代币信息变更的治理功能
