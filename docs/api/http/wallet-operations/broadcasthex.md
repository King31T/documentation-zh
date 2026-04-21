# broadcasthex

TRON API 方法，以十六进制格式向 TRON 网络广播交易。该方法允许直接将预签名交易提交到区块链，无需使用标准 JSON 交易格式。

## HTTP 请求

`POST /wallet/broadcasthex`

## 支持的路径

- `/wallet/broadcasthex`

## 参数

- transaction — 以十六进制格式编码的完整交易数据，包含所有签名和必要字段

## 返回值

- result — 布尔值，表示广播是否成功
- txid — 广播成功时的交易哈希
- message — 关于广播状态的描述性消息

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/broadcasthex \
  --header 'Content-Type: application/json' \
  --data '
{
  "transaction": "0a84010a025e4b220847c9dc89341b300d40f8fed3a2a72e5a66080112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412310a1541608f8da72479edc7dd921e4c30bb7e7cddbe722e121541e9d79cc47518930bc322d9bf7cddd260a0260a8d18e8077093afd0a2a72e1241deadbeefcafebabefacec0011234abcd0badf00d9999777755553333222211114321dcba0f0ff0f013579bdf2468ace0987654321a2b3c4d5e6f7a8b9c0deeff1b"
}
'
```

### 返回

```json
{
  "result": true,
  "txid": "<string>",
  "message": "<string>"
}
```

## 使用场景

- 以十六进制格式向 TRON 网络广播预签名交易。
- 提交离线创建并签名的交易以确保安全性。
- 与输出十六进制编码交易的外部签名工具和硬件钱包集成。
- 构建需要十六进制格式兼容性的自定义交易广播工作流。
- 支持使用十六进制交易数据的遗留系统或工具。
