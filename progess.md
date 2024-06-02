
## Day 1: 2D arrays
given a 6*6 2d array calculate the hour glass with the largest sum
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
the hour glass is in the form
a b c
  d
e f g
### deduction
there are 16 hour glasses in a 6*6 array
four positions --> and four positions --|down
hour glass 1 positions are
[0][0],[0][1],[0][2]
[1][1]
[2][1],[2][1][2][2]
add one to the x values to get the next hour glass 4 times
add one to the y to get next level 4 times
### Day 2 inheritance
did hacker rank challenge to better understand how inheritance works in JS

## Day 3 abstract classes

write a Mybook class that
- inherits from Book
- parameterised constructor taking (title, author, price)
- impliments the Books display method to show the three params
