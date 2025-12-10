<?php

echo "<h3>1. Rectangle Area & Perimeter</h3>";
// 1. Rectangle
$length = 10;
$width = 5;
echo "Area: " . ($length * $width) . "<br>";
echo "Perimeter: " . (2 * ($length + $width)) . "<br><br>";

echo "<h3>2. VAT Calculator</h3>";
// 2. VAT
$amount = 100;
echo "VAT: " . ($amount * 0.15) . "<br><br>";

echo "<h3>3. Odd or Even</h3>";
// 3. Odd/Even
$num = 25;
if ($num % 2 == 0)
    echo "$num is Even<br><br>";
else
    echo "$num is Odd<br><br>";

echo "<h3>4. Largest Number</h3>";
// 4. Largest
$a = 10;
$b = 25;
$c = 5;
if ($a >= $b && $a >= $c)
    echo "Largest: $a";
elseif ($b >= $a && $b >= $c)
    echo "Largest: $b";
else
    echo "Largest: $c";
echo "<br><br>";

echo "<h3>5. Odd Numbers (10-100)</h3>";
// 5. Odd Numbers 10-100
for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0)
        echo "$i ";
}
echo "<br><br>";

echo "<h3>6. Search Array</h3>";
// 6. Search Array
$arr = [10, 20, 30, 40, 50];
$find = 30;
$found = 0;
for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $find) {
        echo "Found at index $i";
        $found = 1;
        break;
    }
}
if (!$found)
    echo "Not found";
echo "<br><br>";

echo "<h3>7. Shapes</h3>";
// 7. Shapes
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++)
        echo "* ";
    echo "<br>";
}
echo "<br>";

for ($i = 3; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++)
        echo "$j ";
    echo "<br>";
}
echo "<br>";

$c = 'A';
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $c . " ";
        $c++;
    }
    echo "<br>";
}
echo "<br>";

echo "<h3>8. 2D Array Shapes</h3>";
// 8. 2D Array Shapes
$matrix = [
    [1, 2, 3, 'A'],
    [1, 2, 'B', 'C'],
    [1, 'D', 'E', 'F'],
];


for ($i = 0; $i < count($matrix); $i++) {
    for ($j = 0; $j < count($matrix[$i]); $j++) {
        if (is_int($matrix[$i][$j])) {
            echo $matrix[$i][$j] . " ";
        }
    }
    echo "<br>";
}

echo "<br>";

for ($i = 0; $i < count($matrix); $i++) {
    for ($j = 0; $j < count($matrix[$i]); $j++) {
        if (!is_int($matrix[$i][$j])) {
            echo $matrix[$i][$j] . " ";
        }
    }
    echo "<br>";
}


?>