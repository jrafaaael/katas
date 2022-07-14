https://www.facebook.com/groups/833819710685465/permalink/1185944182139681/
#
Given a list of points described by their `(x, y)` coordinates on a two dimentional plane, construct a square surrounding at least a given number of points within the area enclosed. That area should be minimal and the square must meet the following conditions:

* The `x-coordinate` and `y-coordinate` of the points should be _integers_
* The _sides_ of the square should be _parallel_ to _coordinate axes_
* At least `k` of given `n` points should _lie strictly inside the square drawn. Strictly inside means that they cannot lie on a side of the square_

For example, given `n=3` points `(1, 1), (1, 2) and (2, 1)` and `k=3`, surround all three points. The minimum area square is 9 units, going from the origin `(0, 0)` to `(3, 3)`

# Function description
Create the function `min_area`. The function must return the _minimum possible area_ of the square that satisfies the constrains, as an interger

`min_area` has the following parameter(s):
* _x[x[0], ..., x[n-1]]_: an array of integer x coordinates
* _y[y[0], ..., y[n-1]]_: an array of integer y coordinates
* _k_: and interger, the minimum number of points to surround

# Constrains
* 2 <= n <= 100
* -10^9 < x[i], y[i] <= 10^9
* 1 <= k <= n
