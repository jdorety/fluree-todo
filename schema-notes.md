# todo Schema

| Predicate | Type          |
| --------- | ------------- |
| \_id      | unique string |
| completed | boolean       |
| created   | instant       |
| text      | string        |

## Schema transaction array

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

## Sample data

```
[
  {
    "_id": "todo?1",
    "todo/completed": true,
    "todo/text": "Take out the trash",
    "todo/created": 1591218682630
  },
  {
    "_id": "todo?2",
    "todo/completed": false,
    "todo/text": "Walk the dog",
    "todo/created": 1591218724992
  },
  {
    "_id": "todo?3",
    "todo/completed": false,
    "todo/text": "Milk the cow",
    "todo/created": 1591218765975
  },
  {
    "_id": "todo?4",
    "todo/completedd": true,
    "todo/text": "Weed the garden",
    "todo/created": 1591218820654
  }
]
```