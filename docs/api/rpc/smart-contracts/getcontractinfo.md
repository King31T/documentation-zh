# getContractInfo

**支持的 API**：`wallet`

TRON API 方法，检索智能合约的详细信息，包括其 ABI、字节码、源代码和元数据。该方法对于了解和与 TRON 网络上已部署合约进行交互至关重要。

```protobuf
rpc GetContractInfo (BytesMessage) returns (SmartContractDataWrapper) {}
```
