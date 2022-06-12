using System;
namespace odev1
{
    class Program
    {
        static void Main (string[]args)
        {
            Console.WriteLine("Pozitif bir sayı giriniz:");
            int n = Int32.Parse(Console.ReadLine());
            Console.WriteLine(n +"adet sayı giriniz:");
            
            int[] sayiDizisi1=new int[n];
            for(int i = 1; i <= sayiDizisi1.Length; i++)
            {
                Console.WriteLine(i + ". sayı:");
                sayiDizisi1[i-1] = Int32.Parse(Console.ReadLine());
            }

            Console.WriteLine("Yazdığınız sayılar arasında çift sayı olanlar:");
            foreach(int cift in sayiDizisi1)
            {
                if(cift % 2 == 0)
                {
                    Console.Write(" " + cift);
                }
            }

        }
    }
}