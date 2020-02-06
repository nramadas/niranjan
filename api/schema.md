# Articles

```
create table articles (
  partition_key int,
  created double,
  id int,
  title text,
  next int,
  prev int,
  content text,
  PRIMARY KEY (partition_key, id)
);
```
