# getContract

**支持的 API**：`wallet`

TRON API 方法，检索 TRON 网络上已部署智能合约的详细信息。该方法提供全面的合约数据，包括字节码、ABI、部署信息和资源配置。

```protobuf
rpc GetContract (BytesMessage) returns (SmartContract) {}
```
