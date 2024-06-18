
public class leetcode {
    public static void main(String[] args) {

        int[] nums = { 1, 3, 2, 1 };

        int[] result = getConcatenation(nums);

        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }

    }

    public static int[] getConcatenation(int[] nums) {
        int len = nums.length;
        int[] ans = new int[2 * len];
        for (int i = 0; i < len; i++) {
            ans[i] = nums[i];
            ans[i + len] = nums[i];
        }
        System.gc();
        return ans;
    }
}
