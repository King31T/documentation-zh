# participateassetissue

TRON API 方法，用于创建参与 TRC10 代币首次代币发行（ICO）的未签名交易。该方法允许用户在发行期间购买新发行的 TRC10 代币。

## HTTP 请求

`POST /wallet/participateassetissue`

## 支持的路径

- `/wallet/participateassetissue`

## 参数

- owner_address — 参与代币发行的地址
- to_address — 代币发行者的地址（创建资产的人）
- asset_name — 要购买的 TRC10 代币名称或 ID
- amount — 用于购买代币的 TRX 数量
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含参与资产发行合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/participateassetissue \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "to_address": "TFgY1uN8buRxAtV2r6Zy5sG3ACko6pJT1y",
  "asset_name": "MyToken",
  "amount": 1000000,
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

- 参与 TRC10 代币 ICO 和众筹活动
- 构建代币发行自动化投资工具
- 在钱包应用中创建代币购买功能
- 在 DeFi 平台中实现代币销售参与功能
