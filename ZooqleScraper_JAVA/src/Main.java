import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

/// uses same libraries as https://github.com/Kushcabbage/Z00qleTerminal

public class Main {
    public Main() {
    }

    public static void main(String[] args) throws InterruptedException {
        String savepath = Main.class.getProtectionDomain().getCodeSource().getLocation().getPath();
        String[] pathparts = savepath.split("/");
        String file = pathparts[pathparts.length - 1] + "/";
        savepath = savepath.substring(0, savepath.length() - file.length());
        String url = "http://www.Zooqle.com";
        WebDriver driver = new HtmlUnitDriver();
        Web webclass = new Web();

        while(true) {
            webclass.popularToFile(url, driver, savepath);
            System.out.println("sleeping for 3 hours");
            TimeUnit.HOURS.sleep(3L);
        }
    }
}
