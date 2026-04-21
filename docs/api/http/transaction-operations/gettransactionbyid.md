# gettransactionbyid

TRON API 方法，通过交易 ID 检索交易详情。该方法返回特定交易的全面信息，包括执行结果、资源消耗和合约详情。

## HTTP 请求

`POST /wallet/gettransactionbyid`

## 支持的路径

- `/wallet/gettransactionbyid`
- `/walletsolidity/gettransactionbyid`

## 参数

- value — 要检索的交易 ID（哈希）
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- ret — 执行结果数组，包含：
  - contractRet — 合约执行结果（SUCCESS、REVERT 等）
  - fee — 已支付的交易费用
- signature — 交易签名数组
- txID — 交易 ID 哈希
- net_usage — 消耗的带宽
- raw_data_hex — 原始交易数据的十六进制表示
- net_fee — 已支付的网络费用
- energy_usage — 消耗的能量（智能合约）
- blockNumber — 包含该交易的区块编号
- block_timestamp — 区块时间戳
- contract_result — 合约执行返回数据（智能合约）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/gettransactionbyid \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "d5ec749ecc2a615399d6573b3550650b4e6606d9ff0d123cd5bdc0bc6a33b0a2",
  "visible": false
}
'
```

### 返回

```json
{
  "ret": [
    {
      "contractRet": "<string>",
      "fee": 123
    }
  ],
  "signature": [
    "<string>"
  ],
  "txID": "<string>",
  "net_usage": 123,
  "raw_data_hex": "<string>",
  "net_fee": 123,
  "energy_usage": 123,
  "blockNumber": 123,
  "block_timestamp": 123,
  "contract_result": [
    "<string>"
  ]
}
```

## 使用场景

- 广播后检查交易状态和执行结果。
- 为钱包和浏览器检索详细的交易信息。
- 分析交易费用和资源消耗。
- 调试智能合约执行并验证交易结果。
