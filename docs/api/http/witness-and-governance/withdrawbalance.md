# withdrawbalance

TRON API 方法，允许超级代表（见证人）提取其积累的区块生产奖励。见证人因生产区块和维护网络而获得 TRX 奖励，此方法使他们能够领取这些收益。

## HTTP 请求

`POST /wallet/withdrawbalance`

## 支持的路径

- `/wallet/withdrawbalance`

## 参数

- owner_address — 提取奖励的超级代表（见证人）地址
- visible — 布尔值，表示是否使用可见（Base58）地址格式而非十六进制

## 返回值

- visible — 布尔值，表示地址是否为可见格式
- txID — 余额提取交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 包含提取合约详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/withdrawbalance \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TGj1Ej1qRzL9feLTLhjwgxXF4Ct6GTWg2U",
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

- 超级代表领取区块生产奖励。
- 见证人从网络验证活动中获取收益。
- 管理见证人节点经济和盈利能力计算。
- 为见证人操作实现自动化奖励收集系统。
- 构建见证人管理工具和仪表板。
- 为 TRON 网络验证者创建财务报告系统。
