# getblockbylatestnum

TRON API 方法，用于检索 TRON 区块链上最新的指定数量的区块。

## HTTP 请求

`POST /wallet/getblockbylatestnum`

## 支持的路径

- `/wallet/getblockbylatestnum`
- `/walletsolidity/getblockbylatestnum`

## 参数

- num — 要检索的最新区块数量（最多 100 个）
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- block — 区块对象数组，每个对象包含：
  - blockID — 区块哈希
  - block_header — 包含原始数据和见证人签名的区块头
  - transactions — 每个区块中的交易数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getblockbylatestnum \
  --header 'Content-Type: application/json' \
  --data '
{
  "num": 5,
  "visible": true
}
'
```

### 返回

```json
{
  "block": [
    {
      "blockID": "<string>",
      "block_header": {},
      "transactions": [
        {}
      ]
    }
  ]
}
```

## 使用场景

- 检索最近的区块链活动和交易
- 构建实时区块链监控仪表板
- 分析最近的网络活动模式
- 创建区块链事件的实时订阅
- 监控最新区块的生产和验证
