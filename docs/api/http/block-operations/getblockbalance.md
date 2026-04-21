# getblockbalance

TRON API 方法，返回特定区块内的余额变化量。按交易显示该区块中账户余额的变化情况。

## HTTP 请求

`POST /wallet/getblockbalance`

## 支持的路径

- `/wallet/getblockbalance`

## 参数

- hash — 64 字符十六进制字符串格式的区块哈希。
- number — 区块编号，必须与提供的哈希匹配。
- visible — 可选布尔值。为 true 时，地址为 base58；为 false 时为十六进制。默认为 true。

## 返回值

- timestamp — 区块时间戳（毫秒）。
- block_identifier — 包含哈希和编号的对象。
- transaction_balance_trace — 每笔交易的数组，包含：
  - transaction_identifier — 交易哈希。
  - operation — 包含 operation_identifier、address 和 amount 的列表（单位：sun；负数表示借出，正数表示收入）。
  - type — 合约类型（例如 TransferContract）。
  - status — 执行状态。

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getblockbalance \
  --header 'Content-Type: application/json' \
  --data '
{
  "hash": "0000000004986736812cbf15ffbcdd229bd3d76a595db895719867cc2da3a5bd",
  "number": 77096758,
  "visible": true
}
'
```

### 返回

```json
{
  "timestamp": 123,
  "block_identifier": {
    "hash": "<string>",
    "number": 123
  },
  "transaction_balance_trace": [
    {
      "transaction_identifier": "<string>",
      "operation": [
        {
          "operation_identifier": 123,
          "address": "<string>",
          "amount": 123
        }
      ],
      "type": "<string>",
      "status": "<string>"
    }
  ]
}
```

## 使用场景

- 审计特定区块的余额变化。
- 构建按地址汇总余额差值的浏览器或分析工具。
- 将应用余额与链上状态进行核对。
