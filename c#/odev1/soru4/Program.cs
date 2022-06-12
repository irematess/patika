Console.WriteLine("Lütfen bir cümle giriniz: ");
string sentence_1 = Console.ReadLine();

Console.WriteLine("Toplam Kelime sayısı: ");
Console.WriteLine(sentence_1.SpaceCounter());

Console.WriteLine("Toplam Harf sayısı: ");
sentence_1 = sentence_1.RemoveWhiteSpaces();
Console.WriteLine(sentence_1.CharCounter());

public static class Extension{
    public static int SpaceCounter(this string param){
        int whiteSpaceCounter = 0;
        foreach(char item in param){
            if(item == ' '){
                whiteSpaceCounter++;
            }
        }
        return whiteSpaceCounter + 1;
    }
    public static string RemoveWhiteSpaces(this string param){
        string[] dizi = param.Split(" ");
        return string.Join("",dizi);
    }
    public static int CharCounter(this string param){
        int charCount = 0;
        foreach(int charNum in param){
            charCount++;
        }
        return charCount;
    }
}