import annotations.Configuration;
import annotations.Element;

import java.util.Locale;

@Configuration
public class User {

    @Element
    private String name="ABC";

    @Element
    private String tenant="abc";

    public String getName() {
        return name;
    }

    public String getTenant() {
        return tenant;
    }


    @Override
    public String toString() {
        return String.format(Locale.ENGLISH, "name : %s, tenant - %s",
                name, tenant);
    }
}
