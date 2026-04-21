# accountpermissionupdate

TRON API 方法，更新 TRON 区块链上账户的权限。该方法允许修改所有者、超级代表和活跃权限，用于多签账户管理。

## HTTP 请求

`POST /wallet/accountpermissionupdate`

## 支持的路径

- `/wallet/accountpermissionupdate`

## 参数

- owner_address — 要更新权限的账户地址
- owner — 可选对象，包含所有者权限设置（阈值和密钥）
- witness — 可选对象，包含超级代表权限设置（阈值和密钥）
- actives — 可选活跃权限对象数组（阈值、操作权限和密钥）
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含权限更新合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/accountpermissionupdate \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "owner": {
    "type": 0,
    "permission_name": "owner",
    "threshold": 1,
    "keys": [
      {
        "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
        "weight": 1
      }
    ]
  },
  "witness": {
    "type": 1,
    "permission_name": "witness",
    "threshold": 1,
    "keys": [
      {
        "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
        "weight": 1
      }
    ]
  },
  "actives": [
    {
      "type": 2,
      "permission_name": "active",
      "threshold": 1,
      "operations": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
      "keys": [
        {
          "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
          "weight": 1
        }
      ]
    }
  ],
  "visible": true
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {},
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 设置具有自定义权限结构的多签账户。
- 修改现有账户的权限和阈值。
- 管理超级代表账户的见证权限。
- 为机构账户实现高级安全模型。
