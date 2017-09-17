import annotations.Configuration;
import org.yaml.snakeyaml.Yaml;

import java.io.*;
import java.lang.reflect.Field;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.applet.Applet;


public class Generate_yaml extends Applet{


    private static final String UTF_8_CHARSET = "UTF-8";
    private static final String YAML_FILE_EXTENTION = ".yaml";
    public static final String TEMP_CONFIG_FILE_NAME = "temp_config_classnames.txt";
    public static final String CONFIG_DIR = "";

    protected static String[] configclasses;

    public static Object getConfigurationClasses() throws IOException {

        Object classList = null;
        if (configclasses != null) {
            classList = configclasses;
        } else {
            File file = new File("/home/chathurangi/project/xacml-development-tool/src", TEMP_CONFIG_FILE_NAME);
            if (file.exists()) {
                try (Scanner scanner = new Scanner(file, UTF_8_CHARSET)) {
                    String content = scanner.useDelimiter("\\Z").next();
                    classList = content.split(",");
                } catch (FileNotFoundException e) {
                    throw new IOException("Error while reading the configuration classes file", e);
                }
            }

        }
        return classList;
    }


    public Map<String, Object> readConfigurationElements(Object classList) throws
            IOException {
        if (classList == null) {
            throw new IOException("Error while reading the configuration elements, config object is null");
        }
        Map<String, Object> elementMap = new LinkedHashMap<>();
        Field[] fields = classList.getClass().getDeclaredFields();
        for (Field field : fields) {

            // if the field is not accessible, make it accessible to read the value of the field.
            if (!field.isAccessible()) {
                field.setAccessible(true);
            }
            // read the field type to check whether it is a composite type
            Class fieldTypeClass = field.getType();
            // read the field value from the bean object. IllegalAccessException will not occur, so it should be made accessible.
            Object fieldValue = null;
            try {
                fieldValue = field.get(classList);
            } catch (IllegalAccessException e) {
                System.out.println("Error while accessing the value of the field: " + field.getName());
            }


            // check whether the field value is null
            if (fieldValue == null) {
                elementMap.put(field.getName(), null);
                continue;
            }
            // check whether the field type is another configuration bean
            if (fieldTypeClass != null && fieldTypeClass.isAnnotationPresent(Configuration.class)) {
                Configuration configuration = (Configuration) fieldTypeClass.getAnnotation(Configuration.class);
                fieldValue = readConfigurationElements(fieldValue);
            }


            // add field to the element map
            elementMap.put(field.getName(), fieldValue).toString();
        }

        return elementMap;
    }


    public void writeConfigurationFile(Map<String, Object> elementMap, String filename) throws IOException {
        // create the yaml string from the map
        Yaml yaml = new Yaml();
        String content = yaml.dumpAsMap(elementMap);

        File file = new File("/home/chathurangi/project/xacml-development-tool/src", CONFIG_DIR);


        // write the yaml string to the configuration file
        try (PrintWriter out = new PrintWriter(new File(file.getPath(), filename
                + YAML_FILE_EXTENTION), UTF_8_CHARSET)) {
              out.println(content);
        } catch (FileNotFoundException | UnsupportedEncodingException e) {
            throw new IOException("Error in creating yaml", e);
        }

    }

    public void main(String[] args) throws IOException {
        Object beanClasses = getConfigurationClasses();

        Configuration configuration = beanClasses.getClass().getAnnotation(Configuration.class);
        //Object configObject=getConfigurationClasses().newInstance();
        readConfigurationElements(getConfigurationClasses());
        writeConfigurationFile(readConfigurationElements(getConfigurationClasses()), configuration.filename());
    }


}




