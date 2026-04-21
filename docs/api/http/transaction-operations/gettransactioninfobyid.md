# gettransactioninfobyid

TRON API 方法，通过交易 ID 检索详细的交易回执和执行信息。该方法提供关于交易执行状态、资源使用、费用以及任何发生的智能合约事件的全面数据。

## HTTP 请求

`POST /wallet/gettransactioninfobyid`

## 支持的路径

- `/wallet/gettransactioninfobyid`
- `/walletsolidity/gettransactioninfobyid`

## 参数

- value — 十六进制格式的交易 ID（哈希）

## 返回值

- id — 交易 ID（哈希）
- blockNumber — 包含该交易的区块编号
- blockTimeStamp — 创建区块的时间戳（毫秒）
- contractResult — 十六进制格式的智能合约执行结果数组
- contract_address — 已部署合约的地址（合约创建交易）
- receipt — 交易回执，包含：
  - energy_usage — 交易消耗的总能量
  - energy_fee — 已支付的能量费用（单位：SUN，1 TRX = 1,000,000 SUN）
  - origin_energy_usage — 优化前的原始能量使用量
  - energy_usage_total — 包含所有操作的总能量使用量
  - net_usage — 交易消耗的带宽
  - net_fee — 已支付的带宽费用（单位：SUN）
  - result — 执行结果状态（SUCCESS、REVERT 等）
- log — 执行期间智能合约发出的事件日志数组
- result — 整体交易执行结果
- resMessage — 交易失败时的错误消息（十六进制编码）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/gettransactioninfobyid \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "4c85b7a5c6e1d5f6e1d5c6f7e1d5c6f7e1d5c6f7e1d5c6f7e1d5c6f7e1d5c6f7"
}
'
```

### 返回

```json
{
  "id": "<string>",
  "blockNumber": 123,
  "blockTimeStamp": 123,
  "contractResult": [
    "<string>"
  ],
  "contract_address": "<string>",
  "receipt": {
    "energy_usage": 123,
    "energy_fee": 123,
    "origin_energy_usage": 123,
    "energy_usage_total": 123,
    "net_usage": 123,
    "net_fee": 123,
    "result": "<string>"
  },
  "log": [
    {}
  ],
  "result": "<string>",
  "resMessage": "<string>"
}
```

## 使用场景

- 获取详细的交易执行信息和资源消耗数据。
- 监控交易成功/失败状态和错误消息。
- 分析智能合约执行结果和事件日志。
- 计算能量和带宽使用的实际费用。
- 构建需要执行详情的交易浏览器和分析工具。
- 通过检查日志和结果调试智能合约交互。
