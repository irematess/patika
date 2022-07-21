# Insertion Sort Projesi
[22,27,16,2,18,6] -> Insertion Sort

- 1-Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.


```
 [22|,27,16,2,18,6]
 [22,27|,16,2,18,6]
 [16,22,27|,2,18,6]
 [2,16,22,27|,18,6]
 [2,16,18,22,27|,6]
 [2,6,16,18,22,27]
```

- 2-Big-O gösterimini yazınız.


 ```
 Worst Case : O(n^2)
 Avarage Case : O(n^2)
 Best Case : O(n)
 ```

- 3-Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.


 ```
 Best Case : [2,6,16,18,22,27]
 Worst Case : [27,22,18,16,6,2]
 ```

- 4-Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.


 ```
 Dizi sıralandıktan sonra [2,6,16,18,22,27] halini alır.Bu durumda 18 sayısı ortada olarak sayılabilir.
 Bu nedenle avarage case kapsamında yer alır. 
 ```


- 5-[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

 
 ```
 [7|,3,5,8,2,9,4,15,6]
 [3,7|,5,8,2,9,4,15,6]
 [3,5,7|,8,2,9,4,15,6]
 [3,5,7,8|,2,9,4,15,6]
 ```
 

 