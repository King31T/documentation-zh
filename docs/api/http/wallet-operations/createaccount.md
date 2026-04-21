# createaccount

TRON API 方法，在 TRON 区块链上创建新账户。该方法生成一个未签名的交易，通过首次向新账户地址发送 TRX 来激活该账户。

## HTTP 请求

`POST /wallet/createaccount`

## 支持的路径

- `/wallet/createaccount`

## 参数

- owner_address — 将创建并支付新账户费用的地址，必须有足够的 TRX 余额来支付账户创建费。
- account_address — 要在区块链上创建和激活的新账户地址。
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含账户创建合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/createaccount \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "account_address": "TFgY1uN8buRxAtV2r6Zy5sG3ACko6pJT1y",
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

- 在区块链上激活新的 TRON 地址。
- 在钱包应用中为新用户创建账户。
- 设置多签或合约账户。
- 将新用户引导到 TRON 生态系统。
