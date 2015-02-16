package services;

import com.fasterxml.jackson.databind.JsonNode;
import common.TsService;
import play.Logger;
import play.Play;
import play.libs.Json;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

/**
 * Created by siyengar on 2/16/15.
 */
public class PageTemplateService extends TsService {
    public static JsonNode getNavBarTabs(){
        // TODO: Replace data stub with data composition
        JsonNode retval = null;
        try {
            retval = Json.parse(new FileInputStream(Play.application().configuration().getString("application.base_dir")
                    + "/app/datastubs/userhome.json"));
            Logger.debug(Json.stringify(retval));
        }
        catch(FileNotFoundException e){
            e.printStackTrace();
        }
        return retval;
    }
    /*
    public Json EvaluatorHome(){
    }
    */
}
