package controllers;


// import com.google.inject.Inject;
import com.fasterxml.jackson.databind.node.ObjectNode;
import common.TsController;
import play.libs.Json;
import play.Logger;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.UUID;

// import models.oauth2.Session;
// import services.SessionService;

/**
 * Created by siyengar on 2/13/15.
 */
public class JApplication extends TsController {
//    @Inject
//    private SessionService sessionService;

    public Result home(){
        ObjectNode retval = Json.newObject();

        ObjectNode pagedata = Json.newObject();
        pagedata.put("caption", "Evaluator Home");

        retval.put("pagedata", pagedata);
        return ok(retval);
    }
}
