# gettransactioninfobyblocknum

TRON API 方法，检索特定区块编号内所有交易的详细信息。

## HTTP 请求

`POST /wallet/gettransactioninfobyblocknum`

## 支持的路径

- `/wallet/gettransactioninfobyblocknum`
- `/walletsolidity/gettransactioninfobyblocknum`

## 参数

- num — 要检索交易信息的区块编号
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- 交易信息对象数组，每个对象包含：
  - id — 交易哈希
  - fee — 交易费用（单位：sun）
  - blockNumber — 包含该交易的区块编号
  - blockTimeStamp — 区块时间戳
  - contractResult — 合约执行结果
  - receipt — 包含能量使用情况和结果的交易回执
  - log — 智能合约执行时的事件日志

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/gettransactioninfobyblocknum \
  --header 'Content-Type: application/json' \
  --data '
{
  "num": 66677878,
  "visible": true
}
'
```

### 返回

```json
[
  {
    "id": "<string>",
    "fee": 123,
    "blockNumber": 123,
    "blockTimeStamp": 123,
    "contractResult": [
      "<string>"
    ],
    "receipt": {},
    "log": [
      {}
    ]
  }
]
```

## 使用场景

- 分析特定区块内的所有交易详情
- 构建包含详细交易信息的区块浏览器
- 监控交易费用和能量消耗模式
- 审计区块中的智能合约执行结果
- 创建全面的交易分析工具
