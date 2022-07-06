import java.util.Scanner;
public class index_11 {
  public static void main(String[] args){//byte 區間在-128~127    
    Scanner scanner = new Scanner(System.in);
    System.out.println("Age:");
    String age=scanner.nextLine().trim();//如果是int 前面宣告int 並用nextInt  //next 取得字串 //nextline 取得整行
    System.out.println("you are"+age);
  }  
}
