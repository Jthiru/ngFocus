package common;

import filters.ProfilerAction;
import play.mvc.Controller;
import play.mvc.With;
import filters.ProfilerAction;

/**
 * TeachScape Base Controller
 * Any other Controller should be derived from this controller.
 *
 * TODO: Define default methods
 */
@With(ProfilerAction.class)
public class TsController extends Controller{

}
