# getcontractinfo

TRON API 方法，用于检索智能合约的详细信息，包括 ABI、字节码、源代码和元数据。该方法对于理解和与 TRON 网络上已部署的合约进行交互至关重要。

## HTTP 请求

`POST /wallet/getcontractinfo`

## 支持的路径

- `/wallet/getcontractinfo`

## 参数

- value — 要检索信息的合约地址
- visible — 布尔值，表示是否使用可读（Base58）地址格式而非十六进制

## 返回值

- contract_address — 合约地址
- bytecode — 十六进制格式的合约字节码
- name — 合约名称（如有）
- abi — 定义合约函数和事件的应用程序二进制接口
- source_map — 用于调试的源代码映射
- source_code — 原始合约源代码（如有）
- compiler_version — 使用的 Solidity 编译器版本
- consume_user_resource_percent — 消耗的用户资源百分比
- origin_address — 部署合约的地址
- origin_energy_limit — 合约创建者设置的能量限制
- contract_state — 合约当前状态
- code_hash — 合约代码的哈希

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getcontractinfo \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
  "visible": true
}
'
```

### 返回

```json
{
  "contract_address": "<string>",
  "bytecode": "<string>",
  "name": "<string>",
  "abi": {},
  "source_map": "<string>",
  "source_code": "<string>",
  "compiler_version": "<string>",
  "consume_user_resource_percent": 123,
  "origin_address": "<string>",
  "origin_energy_limit": 123,
  "contract_state": "<string>",
  "code_hash": "<string>"
}
```

## 使用场景

- 检索合约 ABI 以构建函数调用和解析事件。
- 验证合约源代码并了解合约功能。
- 构建合约浏览器和开发者分析工具。
- 调试合约部署并了解能量消耗设置。
- 在钱包和 DApp 中实现合约交互界面。
- 审计智能合约并了解其实现细节。
