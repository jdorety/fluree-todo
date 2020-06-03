# Todo Schema

| Predicate | Type          |
| --------- | ------------- |
| \_id      | unique string |
| completed | boolean       |
| created   | instant       |
| text      | string        |

```
[
  {
    "_id": "_predicate",
    "name": "todo/completed",
    "type": "boolean"
  },
  {
    "_id": "_predicate",
    "name": "todo/created",
    "type": "instant"
  },
  {
    "_id": "_predicate",
    "name": "todo/text",
    "type": "string"
  }
]
```
