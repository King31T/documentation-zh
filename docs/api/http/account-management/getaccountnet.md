# getaccountnet

TRON API 方法，用于检索特定账户的网络资源信息。该方法提供账户带宽使用的详细信息，包括免费带宽、冻结带宽和网络资源消耗统计。

## HTTP 请求

`POST /wallet/getaccountnet`

## 支持的路径

- `/wallet/getaccountnet`

## 参数

- address — 要查询网络资源的账户地址（十六进制格式）
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- freeNetUsed — 已使用的免费带宽量
- freeNetLimit — 可用的免费带宽总限制
- NetUsed — 已使用的质押带宽量
- NetLimit — 可用的质押带宽总限制
- TotalNetLimit — 网络带宽总限制
- TotalNetWeight — 用于带宽计算的网络总权重
- netUsed — 当前带宽使用量
- netLimit — 当前带宽限制
- TotalEnergyLimit — 能量总限制（如适用）
- TotalEnergyWeight — 能量总权重（如适用）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getaccountnet \
  --header 'Content-Type: application/json' \
  --data '
{
  "address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "visible": false
}
'
```

### 返回

```json
{
  "freeNetUsed": 123,
  "freeNetLimit": 123,
  "NetUsed": 123,
  "NetLimit": 123,
  "TotalNetLimit": 123,
  "TotalNetWeight": 123,
  "netUsed": 123,
  "netLimit": 123,
  "TotalEnergyLimit": 123,
  "TotalEnergyWeight": 123
}
```

## 使用场景

- 监控带宽使用和限制，以便规划交易。
- 检查免费带宽分配和消耗情况。
- 分析网络资源利用率以优化成本。
- 判断是否需要额外质押带宽以确保操作顺畅。
