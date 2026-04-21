# updateaccount

TRON API 方法，更新 TRON 区块链上账户的名称。该方法创建一个未签名的交易，用于设置或修改账户名称字段。

## HTTP 请求

`POST /wallet/updateaccount`

## 支持的路径

- `/wallet/updateaccount`

## 参数

- owner_address — 要更新名称的账户地址
- account_name — 账户的新名称（十六进制格式），发送前必须将字符串转换为十六进制
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含账户更新合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/updateaccount \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "account_name": "0x7570646174654e616d6531353330383933343635353139",
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

- 为账户设置易于识别的名称。
- 更新账户元数据以便识别。
- 在钱包应用和浏览器中为账户添加标签。
- 使用描述性名称整理多个账户。
