https://www.facebook.com/groups/reactjslatino/permalink/2159412450900710/?app=fbl
#
Usando JS, convertir esto:

```js
[
  'OR',
  ['<', 'a', 'b'],
  ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']],
]
```
a esto:

```js
"a < b OR (c == d AND e != f)"
```