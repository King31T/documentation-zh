# voteWitnessAccount

**支持的 API**：`wallet`

TRON API 方法，创建一个使用冻结 TRX 余额为见证人（验证者）投票的交易。投票是 TRON 委托权益证明（DPoS）治理系统的重要组成部分，有助于决定哪些见证人成为超级代表。

```protobuf
rpc VoteWitnessAccount (VoteWitnessContract) returns (Transaction) {}
```
