# transferasset

TRON API 方法，用于创建在账户之间转移 TRC10 代币的未签名交易。

## HTTP 请求

`POST /wallet/transferasset`

## 支持的路径

- `/wallet/transferasset`

## 参数

- owner_address — 发送 TRC10 代币的地址
- to_address — 接收 TRC10 代币的地址
- asset_name — 要转移的 TRC10 代币名称或 ID
- amount — 要转移的代币数量
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含资产转移合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/transferasset \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "to_address": "TFgY1uN8buRxAtV2r6Zy5sG3ACko6pJT1y",
  "asset_name": "TOKEN_NAME",
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
  "raw_data": {},
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 在账户之间转移 TRC10 代币
- 在钱包和 DApp 中构建代币转移功能
- 创建自动化代币分发系统
- 实现使用 TRC10 代币的支付系统
- 促进代币交易和兑换操作
