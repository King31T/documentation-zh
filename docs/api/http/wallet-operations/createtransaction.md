# createtransaction

TRON API 方法，创建未签名的 TRX 转账交易。该方法生成一个交易对象，将 TRX 从一个地址转账到另一个地址，然后可以对其进行签名并广播到网络。

## HTTP 请求

`POST /wallet/createtransaction`

## 支持的路径

- `/wallet/createtransaction`

## 参数

- to_address — 接收方的 TRON 地址（十六进制格式）
- owner_address — 发送方的 TRON 地址（十六进制格式）
- amount — 要转账的 TRX 数量（单位：sun，1 TRX = 1,000,000 sun）
- visible — 可选布尔参数，指定地址格式（默认：false 为十六进制格式）

## 返回值

- visible — 布尔值，表示使用的地址格式
- txID — 交易 ID 哈希
- raw_data — 原始交易数据对象，包含：
  - contract — 包含转账合约详情的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/createtransaction \
  --header 'Content-Type: application/json' \
  --data '
{
  "to_address": "41e9d79cc47518930bc322d9bf7cddd260a0260a8d",
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "amount": 1000,
  "visible": false
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

- 创建需要单独签名的未签名 TRX 转账交易。
- 在安全环境中构建用于离线签名的交易。
- 实现将交易创建与签名分离的钱包功能。
- 为多签工作流准备交易。
