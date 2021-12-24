var rect = {
    perimeter: (x, y) => (2*(x+y)),
    area: (x, y) => x*y
};


function solve(l, b)
{
    console.log("Solving ractangle for the value L = "+l+" and B = "+b);

    if(l <= 0 || b <= 0)
    {
        console.log("ERROR : Rectangle dimension should be greater than zero.")
    }
    else
    {
        console.log("The area of the racteangle is A = "+rect.area(l, b));
        console.log("The perimeter of the racteangle is S = "+rect.perimeter(l, b));
    }
}

solve(4, 5);
solve(0, 3);
solve(-1, 5);