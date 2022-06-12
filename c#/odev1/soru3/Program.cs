using System;
namespace soru3
{
    class Program
    {
        static void Main(string[]args)
        {
            Console.WriteLine("Lütfen pozitif bir sayı giriniz:");
            int n = Int32.Parse(Console.ReadLine());
            Console.WriteLine(n + "adet kelime giriniz:");

            string[] kelimedizisi = new string[n];

            for(int i = 1; i <= kelimedizisi.Length; i++)
            {
                Console.WriteLine(i + ". kelime");
                kelimedizisi[i - 1] = Console.ReadLine();
            }
            Array.Reverse(kelimedizisi);

            Console.WriteLine("Kelime dizisinin sondan başa doğru listesi:");
            foreach(string kelime in kelimedizisi)
            {
                Console.WriteLine("-->" + kelime);
            }
        }
    }
}