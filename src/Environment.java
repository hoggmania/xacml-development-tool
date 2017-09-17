import annotations.Configuration;
import annotations.Element;

import java.util.Locale;

@Configuration
public class Environment {
    @Element
    private String IP="ABC";

    @Element
    private String TIME="abc";

    public String getIP() {
        return IP;
    }

    public String getTIME() {
        return TIME;
    }

    @Override
    public String toString() {
        return String.format(Locale.ENGLISH, "IP : %s, TIME - %s",
                IP, TIME);
    }
}


