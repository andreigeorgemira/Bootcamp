
public class leetcode {
    public static void main(String[] args) {

        String s = "A man, a plan, a canal: Panama";

        System.out.println(isPalindrome(s));


    }

    public static boolean isPalindrome(String s) {
        String noSpace = s.toLowerCase().replaceAll("[, ; : .]", "");
        String noSpaceReverse = new StringBuffer(noSpace).reverse().toString();

        System.out.println(noSpace);
        System.out.println(noSpaceReverse);

        if(noSpace.equals(noSpaceReverse)){
            return true;
        }

        return false;
    }
}
