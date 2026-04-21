# triggersmartcontract

TRON API 方法，用于触发智能合约函数调用。该方法创建一个与 TRON 网络上已部署智能合约交互的交易，允许您使用指定参数调用合约函数。

## HTTP 请求

`POST /wallet/triggersmartcontract`

## 支持的路径

- `/wallet/triggersmartcontract`

## 参数

- contract_address — 智能合约地址（十六进制格式）
- function_selector — 要调用的函数签名（例如："transfer(address,uint256)"）
- parameter — 函数调用的编码参数（十六进制格式）
- owner_address — 调用者的 TRON 地址（十六进制格式）
- call_value — 可选的随调用发送的 TRX 数量（单位：sun）
- fee_limit — 交易的最大能量成本（单位：sun）
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- result — 执行结果对象，包含：
  - result — 布尔值，表示调用是否成功
  - code — 状态代码
  - message — 调用失败时的错误消息
- energy_used — 消耗的能量数量
- constant_result — 合约函数返回值数组
- transaction — 交易对象（如果创建交易）
- logs — 执行期间生成的事件日志数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/triggersmartcontract \
  --header 'Content-Type: application/json' \
  --data '
{
  "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
  "function_selector": "transfer(address,uint256)",
  "parameter": "000000000000000000000000e9d79cc47518930bc322d9bf7cddd260a0260a8d00000000000000000000000000000000000000000000000000000000000003e8",
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "call_value": 0,
  "fee_limit": 10000000,
  "visible": false
}
'
```

### 返回

```json
{
  "result": {
    "result": true,
    "code": "<string>",
    "message": "<string>"
  },
  "energy_used": 123,
  "constant_result": [
    "<string>"
  ],
  "transaction": {},
  "logs": "<array>"
}
```

## 使用场景

- 调用智能合约函数以读取数据或执行状态更改。
- 与 TRON 网络上的 DApp 和 DeFi 协议交互。
- 使用 TRC-20 合约方法进行代币转账。
- 查询合约状态并执行复杂业务逻辑。
