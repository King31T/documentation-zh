# listnodes

TRON API 方法，用于检索 TRON 网络中所有节点的列表，包括超级代表节点和全节点。

## HTTP 请求

`POST /wallet/listnodes`

## 支持的路径

- `/wallet/listnodes`

## 参数

该方法不需要任何参数。

## 返回值

- nodes — 节点信息对象数组，包含：
  - address — 节点地址信息
    - host — 节点 IP 地址
    - port — 节点端口号

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/listnodes \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### 返回

```json
{
  "nodes": [
    {
      "address": {
        "host": "<string>",
        "port": 123
      }
    }
  ]
}
```

## 使用场景

- 发现 TRON 网络中的可用节点
- 构建网络拓扑图和节点分布分析
- 查找直接 P2P 连接的节点
- 监控网络健康状况和节点可用性
- 创建与多个节点交互的去中心化应用
