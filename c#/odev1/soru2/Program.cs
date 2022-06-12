using System;
namespace soru2
{
    class Program
    {
       static void Main(string[]args)
       {
        Console.WriteLine("Lütfen İki adet sayı giriniz: ");
        Console.WriteLine("1. sayı: ");
        int n = Int32.Parse(Console.ReadLine());
        Console.WriteLine("2. sayı: ");
        int m = Int32.Parse(Console.ReadLine());
        Console.WriteLine("Şimdi lütfen " + n + " adet pozitif sayı giriniz: ");

        int[] sayıDizisi_1 = new int[n];

        for(int i = 1; i <= sayıDizisi_1.Length; i++)
        {
        Console.WriteLine(i + ". sayı: ");
        sayıDizisi_1[i-1] = Int32.Parse(Console.ReadLine());
        }

        Console.WriteLine("Şimdi ilk başta girilen ikinci sayıya eşit ya da tam bölünen sayılar: ");
        foreach(var item in sayıDizisi_1)
        {
        if(item % m == 0 || item == m)
        {
        Console.Write(" " + item);
        }
        }
        
           
        }
    
    }
}

