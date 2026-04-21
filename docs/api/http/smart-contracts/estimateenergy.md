# estimateenergy

TRON API 方法，用于估算执行智能合约函数调用的能量消耗。该方法有助于在实际执行交易前预测能量成本，从而更好地进行成本规划和用户体验优化。

## HTTP 请求

`POST /wallet/estimateenergy`

## 支持的路径

- `/wallet/estimateenergy`
- `/walletsolidity/estimateenergy`

## 参数

- owner_address — 将执行合约调用的账户地址
- contract_address — 要估算能量的智能合约地址
- function_selector — 要调用的合约方法函数签名（例如："balanceOf(address)"）
- parameter — 传递给函数的十六进制编码参数
- visible — 布尔值，表示是否使用可读（Base58）地址格式而非十六进制

## 返回值

- result — 估算结果对象，包含：
  - result — 布尔值，表示估算是否成功
  - energy_required — 函数调用的估算能量消耗
- energy_used — 将消耗的总能量
- constant_result — 如果函数是 view/pure 函数，则返回值数组
- transaction — 包含估算成本的交易对象（如适用）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/estimateenergy \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "function_selector": "balanceOf(address)",
  "parameter": "000000000000000000000000a614f803b6fd780986a42c78ec9c7f77e6ded13c",
  "visible": true
}
'
```

### 返回

```json
{
  "result": {
    "result": true,
    "energy_required": 123
  },
  "energy_used": 123,
  "constant_result": "<array>",
  "transaction": {}
}
```

## 使用场景

- 在执行智能合约调用前预测交易成本。
- 构建预先显示估算费用的用户界面。
- 通过选择节能函数优化合约交互。
- 实现具有成本意识的交易批处理和优先级排序。
- 为钱包和 DApp 创建精确的费用估算工具。
- 分析合约性能并识别高耗气操作。
