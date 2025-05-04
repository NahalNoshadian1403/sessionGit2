import java.util.*;

public class Main {

    // تابع محاسبه میانگین آرایه
    public static double average(int[] arr) {
    if (arr.length == 0) return 0;
    int sum = 0;
    for (int num : arr) {
    sum += num;
}
return (double) sum / arr.length;
}

// تابع یافتن بزرگ‌ترین
public static int findMax(int[] arr) {
    if (arr.length == 0) throw new IllegalArgumentException("آرایه خالی است");
    int max = arr[0];
    for (int num : arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// تابع معکوس کردن رشته
public static String reverseString(String str) {
    StringBuilder reversed = new StringBuilder();
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed.append(str.charAt(i));
    }
    return reversed.toString();
}

// تابع جابجایی کلیدها و مقادیر آبجکت (Map)
public static Map<String, String> swapKeysAndValues(Map<String, String> input) {
    Map<String, String> swapped = new HashMap<>();
    for (Map.Entry<String, String> entry : input.entrySet()) {
        swapped.put(entry.getValue(), entry.getKey());
    }
    return swapped;
}

// تابع ادغام دو آبجکت (Map)
public static void mergeMaps(Map<String, String> map1, Map<String, String> map2) {
    map1.putAll(map2); // ادغام map2 در map1
}


public static void main(String[] args) {
    int[] numbers = {3, 7, 2, 9, 5};
    System.out.println("میانگین: " + average(numbers));
    System.out.println("بزرگترین عدد: " + findMax(numbers));
    System.out.println("معکوس رشته: " + reverseString("سلام"));

    Map<String, String> map = new HashMap<>();
    map.put("name", "Ali");
    map.put("city", "Tehran");
    System.out.println("جابجایی کلید و مقدار: " + swapKeysAndValues(map));

    Map<String, String> mapA = new HashMap<>();
    mapA.put("a", "1");
    Map<String, String> mapB = new HashMap<>();
    mapB.put("b", "2");
    mergeMaps(mapA, mapB);
    System.out.println("ادغام آبجکت‌ها: " + mapA);
}
}
