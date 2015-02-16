package controllers;

import common.TsController;
import play.mvc.Result;

/**
 * Created by siyengar on 2/16/15.
 */
public class Application extends TsController {
    public Result index(){
        return ok(views.html.index.render("Reflect MMXV"));
    }
    public Result evalhome(){
        return ok(views.html.admin.render("Reflect MMXV"));
    }
}
