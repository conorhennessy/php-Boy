
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Iterator;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Web {
    public Web() {
    }

    public int popularToFile(String url, WebDriver driver, String savepath) {
        System.out.println("downloading from zooqle...");
        driver.get(url);
        WebElement table = driver.findElement(By.xpath("//ul[@class='nav nav-pills nav-stacked rm-wrap text-trunc sidebar-list']"));
        List<WebElement> items = table.findElements(By.tagName("li"));
        PrintWriter writer = null;
        PrintWriter writermaker = null;
        boolean success = false;

        while(!success) {
            System.out.println(savepath);
            File f = new File(savepath + "/zooqletopseeds.txt");
            if (!f.exists() && !f.isDirectory()) {
                try {
                    writermaker = new PrintWriter(savepath + "/zooqletopseeds.txt", "UTF-8");
                    writermaker.close();
                } catch (IOException var16) {
                    var16.printStackTrace();
                }
            } else {
                f.delete();
            }

            System.out.println("scraping...");

            try {
                writer = new PrintWriter(savepath + "/zooqletopseeds.txt", "UTF-8");
                Iterator var10 = items.iterator();

                while(var10.hasNext()) {
                    WebElement item = (WebElement)var10.next();
                    String wtf = item.getText();
                    String contenttype = item.findElement(By.tagName("i")).toString();

                    String contentprint=",";                    //default value to prevent exceptions
                    if (contenttype.contains("movies")) {
                        contentprint="movie,";
                    }
                    if (contenttype.contains("music")) {
                        contentprint="music,";
                    }

                    if (contenttype.contains("game")) {
                        contentprint="game,";
                    }
                    if (contenttype.contains("app")) {
                        contentprint="app,";
                    }

                    if (contenttype.contains("tv")) {
                        contentprint="tv,";
                    }
                    writer.print(contentprint);

                    String seeds = item.findElement(By.className("text-muted2")).getText();
                    String name = item.findElement(By.tagName("a")).getText();
                    name = name.substring(seeds.length() + 1);
                    seeds = seeds.replaceAll("\\s+", "");
                    writer.print(seeds + ",");
                    writer.println(name);
                }

                writer.close();
                System.out.println("saved info in " + savepath + "/zooqletopseeds.txt");
                success = true;
            } catch (FileNotFoundException var17) {
                var17.printStackTrace();
                new File(savepath + "/zooqletopseeds.txt");
            } catch (UnsupportedEncodingException var18) {
                var18.printStackTrace();
            }
        }

        return 0;
    }
}
