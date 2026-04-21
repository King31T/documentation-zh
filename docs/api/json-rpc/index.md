# 概述

JSON-RPC 是一种无状态、轻量级的远程过程调用（RPC）协议。TRON 网络支持的 JSON-RPC 接口与以太坊兼容。然而，由于链机制和设计的差异，TRON 无法支持以太坊上的某些接口。同时，TRON 还提供了专用 API 来创建不同类型的交易。

**请注意**

- JSON-RPC 服务需要在节点配置文件中启用并设置端口。如果未配置，默认情况下服务是禁用的。

## 如何启用或禁用节点的 JSON-RPC 服务

在节点的[配置文件](https://github.com/tronprotocol/java-tron/blob/develop/framework/src/main/resources/config.conf)中添加以下项，然后启用或禁用它：  
```
node.jsonrpc {  
    httpFullNodeEnable = true  
    httpFullNodePort = 50545  
    httpSolidityEnable = true  
    httpSolidityPort = 50555  
}
```

## HEX 值编码

目前有两种关键的数据类型通过 JSON 传递：未格式化的字节数组和数量。两者都使用十六进制编码传递，但在格式化要求上有所不同：

当编码 QUANTITIES（整数、数字）时：编码为十六进制，前缀为"0x"，使用最紧凑的表示形式（例外：零应表示为"0x0"）。  
示例：

- 0x41（十进制 65）
- 0x400（十进制 1024）
- 错误：0x（应至少有一个数字 - 零应为"0x0"）
- 错误：0x0400（不允许前导零）
- 错误：ff（必须前缀为 0x）

当编码 UNFORMATTED DATA（字节数组、账户地址、哈希、字节码数组）时：编码为十六进制，前缀为"0x"，每个字节用两个十六进制数字表示。  
示例：

- 0x41（大小 1，"A"）
- 0x004200（大小 3，"\\0B\\0"）
- 0x（大小 0，""）
- 错误：0xf0f0f（必须是偶数位数）
- 错误：004200（必须前缀为 0x）

## API 分类

- [eth](eth/eth_accounts.md)
- [net](net/net_listening.md)
- [web3](web3/web3_clientVersion.md)
- [buildTransaction](buildTransaction/TransferContract.md)
