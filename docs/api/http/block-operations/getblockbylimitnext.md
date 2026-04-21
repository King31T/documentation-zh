# getblockbylimitnext

TRON API 方法，用于从 TRON 区块链检索从特定区块编号开始的指定范围内的区块。

## HTTP 请求

`POST /wallet/getblockbylimitnext`

## 支持的路径

- `/wallet/getblockbylimitnext`
- `/walletsolidity/getblockbylimitnext`

## 参数

- startNum — 开始检索的区块编号
- endNum — 结束区块编号（范围限制）
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- block — 指定范围内的区块对象数组，每个对象包含：
  - blockID — 区块哈希
  - block_header — 包含原始数据和见证人签名的区块头
  - transactions — 每个区块中的交易数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getblockbylimitnext \
  --header 'Content-Type: application/json' \
  --data '
{
  "startNum": 66677870,
  "endNum": 66677880,
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

- 检索特定范围内的区块进行分析
- 构建分页区块浏览器
- 分析特定时间段内的区块链活动
- 创建历史数据分析工具
- 实现高效的区块同步机制
