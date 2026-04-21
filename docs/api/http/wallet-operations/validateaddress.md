# validateaddress

TRON API 方法，验证给定地址是否为有效的 TRON 地址。该方法检查地址的格式和结构，以确保其符合 TRON 的地址规范。

## HTTP 请求

`POST /wallet/validateaddress`

## 支持的路径

- `/wallet/validateaddress`

## 参数

- address — 要验证的 TRON 地址，可以是 base58 或十六进制格式
- visible — 可选布尔参数。设置为 true 时，预期地址为 base58 格式（T 地址）；设置为 false 或省略时，预期十六进制格式。默认为 false。

## 返回值

- result — 布尔值，表示地址是否有效（true）或无效（false）
- message — 地址有效时返回地址的十六进制表示，无效时返回错误消息

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/validateaddress \
  --header 'Content-Type: application/json' \
  --data '
{
  "address": "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
  "visible": true
}
'
```

### 返回

```json
{
  "result": true,
  "message": "<string>"
}
```

## 使用场景

- 在处理交易前验证用户输入，以防止错误。
- 验证从外部来源或用户界面接收的地址。
- 在钱包和 DApp 中实现地址验证，以确保数据完整性。
- 检查 base58 和十六进制表示之间的地址格式兼容性。
