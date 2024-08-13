
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
## Day 4 Linked list
its been almost a year since i ran away from this data structure.
now it is time to deal with it.
-linked lists operate like arrays but are not stored in a specific index
- each elements has a pointer to the next elem location
the element (Node) has the data stored and a link
data can be any type
the entry point of the list is the head (elem of first node)
last node points to null
in an empty linked list the head is null
adv --> elements can be easily added/ removed without reorgasising it
dadv --> slow search operation more memory (pointers)
can be singly, double or cyclic
### methods
### Day 6
### Day 7
### Day 8
### Day 9
### Day 10
Key things in recursion 
- what is the base case?
- least amont of work required to reach the base case
- uderstand callstack to understand recursion
- each new call to the recursion method is added to the top of the stack.
when eend condition is met the methods start being poped off the callstack
uses implicit stack (has a con of memory issues)
benefit can redce time complexity using memoization
good with recursive DS sch as trees and graphs
### Day 11 - currying
currying allos the creation of specialized functions from a generic case
you can derive functions from the carryed function
carrying can also help one create higher order functions
### Day 12

