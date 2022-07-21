# Merge Sort Projesi
 [16,21,11,8,12,22] -> Merge Sort

- 1-Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

```
 [16,21,11,8,12,22] ilk önce sayı dizisini ikiye bölüyoruz.
 - [16,21,11]     [8,12,22]
 Daha sonra böldüğümüz dizileri bir daha ikiye bölüyoruz.
 - [16,21]   [11]   [8,12]   [22]
 Elde edilen diziler 2 veya daha az eleman sayısına ulaştığı için bölme işlemini durduruyoruz.
 Her diziyi kendi içinde sıralıyoruz.
 - [16,21]   [11]   [8,12]   [22]
 Şimdi ise ikili olarak sıraya uygun bir şekilde dizileri birleştiriyoruz.
 - [11,16,21]   [8,12,22]
 Elde edilen dizileri bir kez daha birleştiriyoruz.
 - [8,11,12,16,21,22]
 Ve dizimiz sıralı hale gelir.
 ```

- 2-Big-O gösterimini yazınız.
 
 
 
 ## 2- Big O Notation Gösterimi
 ```
 Worst case   : O(n*logn)
 Average case : O(n*logn)
 Best case    : O(n*logn)
 ```
 
 
