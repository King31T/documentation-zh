# triggerconstantcontract

TRON API 方法，调用常量（只读）智能合约方法，不消耗能量或带宽。该方法允许您查询合约状态并调用 view 函数，无需向区块链广播交易。

## HTTP 请求

`POST /wallet/triggerconstantcontract`

## 支持的路径

- `/wallet/triggerconstantcontract`
- `/walletsolidity/triggerconstantcontract`

## 参数

- owner_address — （可选）十六进制格式的调用合约方法的地址
- contract_address — 要调用的智能合约地址（十六进制格式）
- function_selector — 函数签名或选择器（例如："balanceOf(address)"）
- parameter — （可选）十六进制格式的函数调用编码参数

## 返回值

- result — 执行结果对象，包含：
  - result — 布尔值，表示调用是否成功
- energy_used — 如果这是真实交易，估算的能量消耗
- constant_result — 十六进制格式的合约方法返回值数组
- transaction — 将创建的交易对象（供参考，不执行）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/triggerconstantcontract \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41b487cdb2d8dc7b2a8e5e7e7b4e3e8b8b8b8b8b",
  "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
  "function_selector": "balanceOf(address)",
  "parameter": "000000000000000000000000b487cdb2d8dc7b2a8e5e7e7b4e3e8b8b8b8b8b"
}
'
```

### 返回

```json
{
  "result": {
    "result": true
  },
  "energy_used": 123,
  "constant_result": [
    "<string>"
  ],
  "transaction": {}
}
```

## 使用场景

- 调用只读智能合约方法以查询区块链状态。
- 免费读取代币余额、合约变量和其他 view 数据。
- 在执行实际交易前测试合约方法调用。
- 构建需要显示当前合约状态的用户界面。
- 实现需要状态查询的合约交互工具。
- 在执行前估算合约方法调用的能量成本。
