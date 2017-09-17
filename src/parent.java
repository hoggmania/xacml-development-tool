import annotations.Configuration;
import annotations.Element;

import java.util.Locale;

@Configuration(filename = "parent")
public class parent{

    @Element
    User user=new User();

    @Element
    Environment environment=new Environment();

    @Element
    Resources resources = new Resources();

    public User getUser() {
        return user;
    }

    public Environment getEnvironment() {
        return environment;
    }

    public Resources getResources() {
        return resources;
    }

    @Override
    public String toString() {
        return String.format(Locale.ENGLISH, "user : %s, environment : %s, resources - %s",
                user, environment, resources);
    }
}




